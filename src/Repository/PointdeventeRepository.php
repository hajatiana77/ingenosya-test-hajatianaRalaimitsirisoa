<?php

namespace App\Repository;

use App\Entity\Pointdevente;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Pointdevente|null find($id, $lockMode = null, $lockVersion = null)
 * @method Pointdevente|null findOneBy(array $criteria, array $orderBy = null)
 * @method Pointdevente[]    findAll()
 * @method Pointdevente[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PointdeventeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Pointdevente::class);
    }
    
    public function find_all(){
        $qb = $this->createQueryBuilder("p")
                ->leftJoin('p.user', 'u')   
                ->addSelect('u')                                                                                                                                                                        
                ->orderBy("p.nom_pv","ASC"); 
        return $qb->getQuery()->getArrayResult();                                                                                                
    }

    // /**
    //  * @return Pointdevente[] Returns an array of Pointdevente objects
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

    public function findOneBySomeField($value): ?Pointdevente
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.id = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
}
