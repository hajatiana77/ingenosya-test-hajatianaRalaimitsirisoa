<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\Validator\Constraints\DateTime;

use App\Entity\Pointdevente;
use App\Entity\Produit;
use App\Entity\Facture;
use App\Entity\Produitquantite;

use App\Form\PointdeventeType;
use App\Form\ProduitType;
use App\Repository\PointdeventeRepository;
use App\Repository\ProduitRepository;

use Doctrine\DBAL\Driver\Connection;// uniquement pour DBAL

/**
 * @Route("/admin", name="admin")
 * @IsGranted("ROLE_USER",statusCode=404, message="Access only employee")
 */
class AdminController extends AbstractController 
{
    /**
     * @Route("/", name="admin_index", methods={"GET"})
     */    
    public function index(Session $session)
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
        return $this->render('admin/index.html.twig', [            
            'nomUser' => $user->getUsername(),
            'tab' => $tab,
            'idUser'=>$user->getId(),
            'rows'=>$rows
        ]);
    }
    
    /**
     * @Route("/pv_show/{id}", name="pv_show", methods="GET")
     */ 
    public function show_pv(Session $session,Pointdevente $Pointdevente):Response
     {        
        $em = $this->getDoctrine()->getManager();                                         
        $rows = $em->getRepository('App:Produit')->find_all($Pointdevente->getId());        
        $user=$this->getUser();
        return $this->render('admin/pv_show.html.twig', [            
            'nomUser' => $user->getUsername(),
            'nom_pv'=> $Pointdevente->getNomPv(),
            'id_pv'=> $Pointdevente->getId(),
            'rows'=> $rows                     
        ]);
     }   
     
     /**
     * @Route("/getlistproduit", name="admin_getlistproduit")
     */      
     public function getlistproduit(Request $request):Response
     {        
        $limit=$request->query->get('limit');
        $offset=$request->query->get('offset');
        $order=$request->query->get('order') ? $request->query->get('order'):'DESC';
                
        $id_pv=$request->query->get('id_pv') ? $request->query->get('id_pv'):0;
        $nom_poduit=$request->query->get('nom_poduit') ? $request->query->get('nom_poduit'):'';                
        $em = $this->getDoctrine()->getManager(); 
        $total_rows = $em->getRepository('App:Produit')->find_all($id_pv);
        $rows = $em->getRepository('App:Produit')->find_all($id_pv,$offset,$limit,$nom_poduit);                                                
        $actual_data = ['total' => count($total_rows), 'rows' => $rows];
        return $this->json($actual_data);
     } 
     
     /**
     * @Route("/facture", name="admin_facture")
     */      
     public function facture(Request $request):Response
     {           
        $id_pv=$request->request->get('id_pd');
        $tab_id_quantite=$request->request->get('tab_id_quantite'); 
        $em = $this->getDoctrine()->getManager(); 
               
        $pv = $em->getRepository('App:Pointdevente')->find($id_pv);//$pv = $em->getRepository('App:Pointdevente')->findOneBySomeField($id_pv);       

        $facture = new Facture(); 
        $facture->setPv($pv);               
        $facture->setDate(\DateTime::createFromFormat('Y-m-d H:i:s',date("Y-m-d H:i:s")));  
        $em->persist($facture);
        $em->flush(); 
        
        if(sizeof($tab_id_quantite)>0){
            foreach($tab_id_quantite as $cle=>$row){
                $Produitquantite= new Produitquantite();
                $Produitquantite->setFacture($facture);
                $Produitquantite->setProduit($em->getRepository('App:Produit')->find($row[0]));
                $Produitquantite->setQuantite($row[1]);
                $em->persist($Produitquantite);
            }
        }
        $em->flush(); 
                
        $actual_data = ['status' => true,'id_facture'=>$facture->getId()];
        return $this->json($actual_data);        
     }
     
     /**
     * @Route("/printfacture/{id}", name="printfacture", methods="GET")
     */
    public function printfacture(Request $request, Facture $facture): Response
    {
//echo 'id_facture=>'.$facture->getId(); die();
       echo 'impression facrture_'.$facture->getId().'.pdf en cours de d&eacute;veloppement '; die();
    }
     
     /**
     * @Route("/pointdevente", name="pointdevente", methods={"GET"})
     */
    public function pointdevente(PointdeventeRepository $pointdeventeRepository): Response
    {
        $user=$this->getUser();
        return $this->render('admin/pointdevente/index.html.twig', [
            'pointdeventes' => $pointdeventeRepository->findAll(),
            'nomUser' => $user->getUsername(),
        ]);
    }
    
    /**
     * @Route("/new_pv", name="new_pv", methods={"GET","POST"})
     */
    public function new_pv(Request $request): Response
    {
        $pointdevente = new Pointdevente();
        $form = $this->createForm(PointdeventeType::class, $pointdevente);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($pointdevente);
            $entityManager->flush();

            return $this->redirectToRoute('pointdevente');
        }
        
        $user=$this->getUser();

        return $this->render('admin/pointdevente/new.html.twig', [
            'pointdevente' => $pointdevente,
            'form' => $form->createView(),
            'nomUser' => $user->getUsername(),
        ]);
    }
    
    /**
     * @Route("pointdevente_show/{id}", name="pointdevente_show", methods={"GET"})
     */
    public function pointdevente_show(Pointdevente $pointdevente): Response
    {
        $user=$this->getUser();
        return $this->render('admin/pointdevente/show.html.twig', [
            'pointdevente' => $pointdevente,
            'nomUser' => $user->getUsername(),
        ]);
    }
    
    /**
     * @Route("pointdevente_edit/{id}/edit", name="pointdevente_edit", methods={"GET","POST"})
     */
    public function pointdevente_edit(Request $request, Pointdevente $pointdevente): Response
    {
        $form = $this->createForm(PointdeventeType::class, $pointdevente);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('pointdevente_index');
        }
        $user=$this->getUser();
        return $this->render('admin/pointdevente/edit.html.twig', [
            'pointdevente' => $pointdevente,
            'form' => $form->createView(),
            'nomUser' => $user->getUsername(),
        ]);
    }
    
    /**
     * @Route("pointdevente_delete/{id}", name="pointdevente_delete", methods={"DELETE"})
     */
    public function pointdevente_delete(Request $request, Pointdevente $pointdevente): Response
    {
        if ($this->isCsrfTokenValid('delete'.$pointdevente->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($pointdevente);
            $entityManager->flush();
        }

        return $this->redirectToRoute('pointdevente');
    }
    
    /**
     * @Route("/produit", name="produit", methods={"GET"})
     */
    public function produit(ProduitRepository $produitRepository): Response
    {
        $user=$this->getUser();
        return $this->render('admin/produit/index.html.twig', [
            'produits' => $produitRepository->findAll(),
            'nomUser' => $user->getUsername(),
        ]);
    }
    
    /**
     * @Route("/produit_new", name="produit_new", methods={"GET","POST"})
     */
    public function produit_new(Request $request): Response
    {
        $produit = new Produit();
        $form = $this->createForm(ProduitType::class, $produit);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($produit);
            $entityManager->flush();

            return $this->redirectToRoute('produit_index');
        }
        $user=$this->getUser();
        return $this->render('admin/produit/new.html.twig', [
            'produit' => $produit,
            'form' => $form->createView(),
            'nomUser' => $user->getUsername(),
        ]);
    }
    
    /**
     * @Route("produit_show/{id}", name="produit_show", methods={"GET"})
     */
    public function produit_show(Produit $produit): Response
    {
        $user=$this->getUser();
        return $this->render('admin/produit/show.html.twig', [
            'produit' => $produit,
            'nomUser' => $user->getUsername(),
        ]);
    }
    
    /**
     * @Route("produit_edit/{id}/edit", name="produit_edit", methods={"GET","POST"})
     */
    public function produit_edit(Request $request, Produit $produit): Response
    {
        $form = $this->createForm(ProduitType::class, $produit);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('produit');
        }
        $user=$this->getUser();
        return $this->render('admin/produit/edit.html.twig', [
            'produit' => $produit,
            'form' => $form->createView(),
            'nomUser' => $user->getUsername(),
        ]);
    }
    
    /**
     * @Route("produit_delete/{id}", name="produit_delete", methods={"DELETE"})
     */
    public function produit_delete(Request $request, Produit $produit): Response
    {
        if ($this->isCsrfTokenValid('delete'.$produit->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($produit);
            $entityManager->flush();
        }

        return $this->redirectToRoute('produit');
    }
     
}
