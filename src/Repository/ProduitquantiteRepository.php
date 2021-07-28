<?php

namespace App\Repository;

use App\Entity\Produitquantite;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Produitquantite|null find($id, $lockMode = null, $lockVersion = null)
 * @method Produitquantite|null findOneBy(array $criteria, array $orderBy = null)
 * @method Produitquantite[]    findAll()
 * @method Produitquantite[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProduitquantiteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Produitquantite::class);
    }
    
    public function find_all(string $chn_id_fature=''){
        $qb = $this->createQueryBuilder("pq")
            ->where('pq.facture IN ('.$chn_id_fature.')')
            ->leftJoin('pq.produit', 'p') 
            ->addSelect('p');                                                                                                                                                                                                                      
        return $qb->getQuery()->getArrayResult();                                                                                                
    }

    // /**
    //  * @return Produitquantite[] Returns an array of Produitquantite objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Produitquantite
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
