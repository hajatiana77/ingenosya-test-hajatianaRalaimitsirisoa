<?php

namespace App\Repository;

use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }
    
    public function getByNotRole($role='1'){ 
        return $this->createQueryBuilder("u")
            ->where("u.roles <>'".$role."'")            
            ->orderBy("u.id", "DESC")
            ->getQuery()
            ->getResult()
        ;
    }
    
    public function deleteByWhere($where='1'){ 
        return $this->createQueryBuilder("u")
            ->delete()
            ->where($where)                        
            ->getQuery()
            ->getResult()
        ;
    }
    
    public function find_all(){
        $qb = $this->createQueryBuilder("u")                                                
                ->orderBy("u.username");                  
//echo $qb; die();                                   
        return $qb->getQuery()->getResult();                                                                                        
    }
}
