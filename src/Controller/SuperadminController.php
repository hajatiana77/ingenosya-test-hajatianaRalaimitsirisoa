<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

use App\Entity\User;
use App\Entity\Pointdevente;
use App\Entity\Facture;
use App\Entity\Produitquantite;

use App\Repository;
use App\FactureRepository;
use App\Repository\PointdeventeRepository;
use App\Repository\ProduitquantiteRepository;

use Doctrine\DBAL\Driver\Connection;// uniquement pour DBAL

/**     
 * @Route("/superadmin", name="superadmin")
 * @IsGranted("ROLE_ADMIN",statusCode=404, message="Access only superadmin") 
 */
class SuperadminController extends AbstractController
{
    /**
     * @Route("/", name="superadmin_index")     
     */
    public function index(Session $session)
    {
        $user=$this->getUser();
        
        return $this->render('superadmin/index.html.twig', [            
            'nomUser' => $user->getUsername(),
        ]);
    }
    
    /**
     * @Route("/getlistemembre", name="superadmin_getlistemembre")     
     */
    public function getlistemembre(Request $request):Response 
    {
        $limit=$request->query->get('limit');
        $offset=$request->query->get('offset');
        $order=$request->query->get('order');
        $order='DESC';
       
        $em = $this->getDoctrine()->getManager(); 
        //$users = $em->getRepository('App:User')->findBy(['username'=>'Anna'],['id'=>$order],$limit,$offset);
        //$users = $em->getRepository('App:User')->findAll();         
        $users = $em->getRepository('App:User')->getByNotRole('["ROLE_SUPER_ADMIN"]');                                      
        $actual_data = ['total' => count($users), 'rows' => $users];
        return $this->json($actual_data);
    }
    
    /**
     * @Route("/deleteUser", name="superadmin_deleteuser")
    */
    public function deleteUser(Request $request){
        $id=$request->request->get('id');
        $em = $this->getDoctrine()->getManager();         
        $users = $em->getRepository('App:User')->deleteByWhere('u.id='.$id);
        return $this->json(['status'=>'success']);
    }
    
    /**
     * @Route("/editUser/{id}", name="superadmin_edituser",requirements={"id"="\d+"})
    */
    public function editUser($id='',Request $request,Session $session):Response 
    {       
        $em = $this->getDoctrine()->getManager();         
        $user = new User();
        $user = $em->getRepository('App:User')->find($id);   
        $form = $this->createForm('App\Form\EditUserType', $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $em->flush();
            
            $request->getSession()->getFlashBag()->add('notice', 'Modification bien enregistrée.');
            
            return $this->redirectToRoute('superadminsuperadmin_index');
        }        

        return $this->render('superadmin/editUser.html.twig', array(
            'username' => $user->getUsername(),                        
            'form' => $form->createView(),
            'nomUser' => $user->getUsername(),
        ));
    }
    
    /**
     * @Route("/graph", name="graph")     
     */
    public function graph(Request $request):Response 
    {
        $em = $this->getDoctrine()->getManager();                                         
        $rows = $em->getRepository('App:Pointdevente')->find_all();
        $user=$this->getUser();
        $tab=[];
        if(is_array($rows) && sizeof($rows)>0){
            foreach($rows as $key=>$data){                
                if(is_array($data['user']) && sizeof($data['user'])>0){                    
                    foreach($data['user'] as $cle=>$value){
                        $tab[$data['id']][$value['id']]=$value['id'];
                    }        
                }
            }            
        }
        $user=$this->getUser();            
        return $this->render('superadmin/graph.html.twig', [            
            'nomUser' => $user->getUsername(),
            'tab' => $tab,
            'idUser'=>$user->getId(),
            'rows'=>$rows
        ]);
    }
    
    /**
     * @Route("/graphpv", name="graphpv", methods="GET")     
     */
    public function graphpv(Request $request):Response 
    {
        $em = $this->getDoctrine()->getManager();                                         
        $rows = $em->getRepository('App:Pointdevente')->find_all();
        $user=$this->getUser();
        $tab=[];
        if(is_array($rows) && sizeof($rows)>0){
            foreach($rows as $key=>$data){                
                if(is_array($data['user']) && sizeof($data['user'])>0){                    
                    foreach($data['user'] as $cle=>$value){
                        $tab[$data['id']][$value['id']]=$value['id'];
                    }        
                }
            }            
        }
        $user=$this->getUser();            
        return $this->render('superadmin/graphepv.html.twig', [            
            'nomUser' => $user->getUsername(),
            'tab' => $tab,
            'idUser'=>$user->getId(),
            'rows'=>$rows
        ]);
    }
    
    /**
     * @Route("/showgraphpv", name="showgraphpv", methods={"POST"})     
     */
    public function showgraphpv(Connection $connection, Request $request):Response 
    {
        require_once("../jpgraph/include_path_inc.php");
        require_once("../jpgraph/jpgraph.php");
        require_once("../jpgraph/jpgraph_bar.php"); //histogramme  
        require_once("../jpgraph/jpgraph_line.php");//courbe              
        
        $largeur = 800;
        $hauteur = 500;
                
        $tab_pv=array();        
        $tab_recette=array();
        $pv_plus_de_rectte='';
        
        $user=$this->getUser(); 
        $date1='';
        $date2='';
        $date_pick1= $request->request->get('datepicker1') ? $request->request->get('datepicker1'):'';
        $date_pick2= $request->request->get('datepicker2') ? $request->request->get('datepicker2'):'';
        if($date_pick1 !=''){
            $tab_date_pick1= explode('/',$date_pick1);
            $date1=$tab_date_pick1[2].'-'.$tab_date_pick1[0].'-'.$tab_date_pick1[1];
        }
       
        if($date_pick2!=''){   
            $tab_date_pick2= explode('/',$date_pick2);
            $date2=$tab_date_pick2[2].'-'.$tab_date_pick2[0].'-'.$tab_date_pick2[1];
        }
        
        $sql2='SELECT  
	               pointdevente.nom_pv,
	               SUM(produit.prix_unitaire*produitquantite.quantite) AS recette
                FROM facture as f
                	LEFT JOIN pointdevente ON f.pv_id=pointdevente.id
                	LEFT JOIN produitquantite ON produitquantite.facture_id=f.id
                	LEFT  JOIN produit ON produitquantite.produit_id=produit.id
                WHERE 1=1 ';
        if($date1!='' && $date2!=''){
            $sql2.=' AND DATE(f.date) >="'.$date1.'" AND DATE(f.date) <="'.$date2.'"';
        }elseif($date1 !=''){
            $sql2.=' AND DATE(f.date) >="'.$date1.'"';
        }elseif($date2 !=''){
            $sql2.='AND DATE(f.date) <="'.$date2.'"';
        }
        $sql2.=' GROUP BY pointdevente.id';
        $pv_recette = $connection->fetchAll($sql2);

        if(is_array($pv_recette) && sizeof($pv_recette)>0){
            foreach($pv_recette as $key=>$val){
                array_push($tab_pv,$val['nom_pv']);
                array_push($tab_recette, (int) $val['recette']);
            }             
            
            // Initialisation du graphique
            $graph = new \Graph($largeur, $hauteur);        
            $graph->SetScale('textlin',100000,10000000);
            //$graph->img->SetMargin ( 40 , 30 , 20 , 40 );                     
            $courb = new \LinePlot($tab_recette);// Créer une courbe
            $courb->SetCenter();       
            $courb->value->Show();// Afficher les valeurs pour chaque point
            $courb->SetCenter();
            $graph->Add($courb);// Ajouter la courbe au conteneur
            $graph->title->set("Point de vente qui rapporte de plus ");// Ajout du titre du graphique
            $graph->xaxis->title->Set("Points de vente");
            $graph->yaxis->title->Set("Recette");
            $graph->xaxis->SetTickLabels($tab_pv);                
            //$graph->stroke();  // Affichage du graphique en mode 
            
            $gdImgHandler = $graph->Stroke(_IMG_HANDLER);// Display the graph
            ob_start();//Start buffering              
            $graph->img->Stream();//Print the data stream to the buffer 
            $image_data = ob_get_contents();//Get the conents of the buffer
            ob_end_clean();//Stop the buffer/clear it.
            $pv_plus_de_rectte = base64_encode($image_data);
        }                                    
        
        return $this->render('superadmin/graphe_pv_rapporte_plus.html.twig', [            
            'nomUser' => $user->getUsername(),            
            'idUser'=>$user->getId(),                        
            'pv_plus_de_rectte'=>$pv_plus_de_rectte             
        ]);
    }
    
    /**
     * @Route("/showgraph", name="showgraph", methods={"POST"})     
     */
    public function showgraph(Connection $connection, Request $request):Response 
    {
        $id_pv = $request->request->get('id_pv')? $request->request->get('id_pv'):0;
        $date1='';
        $date2='';
        $date_pick1= $request->request->get('datepicker1') ? $request->request->get('datepicker1'):'';
        $date_pick2= $request->request->get('datepicker2') ? $request->request->get('datepicker2'):'';
        if($date_pick1 !=''){
            $tab_date_pick1= explode('/',$date_pick1);
            $date1=$tab_date_pick1[2].'-'.$tab_date_pick1[0].'-'.$tab_date_pick1[1];
        }
       
        if($date_pick2!=''){   
            $tab_date_pick2= explode('/',$date_pick2);
            $date2=$tab_date_pick2[2].'-'.$tab_date_pick2[0].'-'.$tab_date_pick2[1];
        }
        
        $em = $this->getDoctrine()->getManager();
        $pointdevente = $em->getRepository('App:Pointdevente')->find($id_pv);
        $user=$this->getUser();        
        //$rows_facture = $em->getRepository('App:Facture')->find_idfacture($pointdevente->getId());
        $sql='SELECT * FROM facture as f WHERE f.pv_id='.$pointdevente->getId();
        if($date1!='' && $date2!=''){
            $sql.=' AND DATE(f.date) >="'.$date1.'" AND DATE(f.date) <="'.$date2.'"';
        }elseif($date1 !=''){
            $sql.=' AND DATE(f.date) >="'.$date1.'"';
        }elseif($date2 !=''){
            $sql.='AND DATE(f.date) <="'.$date2.'"';
        }
       
        $rows_facture = $connection->fetchAll($sql);
        $chnid_facture='';
        $sep='';
        if(sizeof($rows_facture)>0){
            foreach($rows_facture as $cle=>$tab){
                if($tab['id']){
                   $chnid_facture.=$sep.$tab['id'];
                   $sep=','; 
                }
            }
        }
  
        $produits=array();
        $quantites=array();
        $rectteJournaliere=0; 
        $image_plus_achete='';
        
        require_once("../jpgraph/include_path_inc.php");
        require_once("../jpgraph/jpgraph.php");
        require_once("../jpgraph/jpgraph_bar.php"); //histogramme  
        require_once("../jpgraph/jpgraph_line.php");//courbe              
        
        $largeur = 800;
        $hauteur = 500;
        
        if($chnid_facture !=''){     
            $rows_produitquantite = $em->getRepository('App:Produitquantite')->find_all($chnid_facture);
            if(is_array($rows_produitquantite) && sizeof($rows_produitquantite)>0){
                foreach($rows_produitquantite as $cle=>$row){
                    array_push($produits,$row['produit']['nom_pdt']);
                    array_push($quantites,$row['quantite']);  
                    $rectteJournaliere+=$row['quantite']*$row['produit']['prix_unitaire'];                
                }
            }
            // Initialisation du graphique
            $graph = new \Graph($largeur, $hauteur);        
            
            // Echelle lineaire ('lin') en ordonnee et pas de valeur en abscisse ('text')
            // Valeurs min et max seront determinees automatiquement
            $graph->setScale("textlin");
            
            // Creation de l'histogramme
            //$histo = new \BarPlot($donnees); 
            // Ajout de l'histogramme au graphique
            //$graphe->add($histo);
            
            $courb = new \LinePlot($quantites);// Créer une courbe
            $courb->SetCenter();       
            $courb->value->Show();// Afficher les valeurs pour chaque point
            $courb->SetCenter();
            $graph->Add($courb);// Ajouter la courbe au conteneur
            $graph->title->set("Les marchandises les plus achetés chez ".$pointdevente->getNomPv());// Ajout du titre du graphique
            $graph->xaxis->title->Set("Produits");
            $graph->yaxis->title->Set("Nombre de ventes");
            $graph->xaxis->SetTickLabels($produits);                
            //$graph->stroke();  // Affichage du graphique en mode 
            
            $gdImgHandler = $graph->Stroke(_IMG_HANDLER);// Display the graph
            ob_start();//Start buffering              
            $graph->img->Stream();//Print the data stream to the buffer 
            $image_data = ob_get_contents();//Get the conents of the buffer
            ob_end_clean();//Stop the buffer/clear it.
            $image_plus_achete = base64_encode($image_data);//Set the variable equal to the base 64 encoded value of the stream. This gets passed to the browser and displayed.        
        } 
       
        return $this->render('superadmin/graphpv_show.html.twig', [            
            'nomUser' => $user->getUsername(),            
            'idUser'=>$user->getId(),
            'idPv'=>$pointdevente->getId(), 
            'rectteJournaliere'=>$rectteJournaliere,
            'ImageProduitsPlusAchete'=>$image_plus_achete                         
        ]);            

    }
}
