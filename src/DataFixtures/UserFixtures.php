<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Enum\ProfilTypeEnum;

class UserFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {           
        $listNames = array('membre', 'admin');
        foreach ($listNames as $name) {
            $user = new User;
            $user->setUsername($name);
            $user->setPassword($name.'2021');
            $user->setEmail($name.'@yahoo.com');
            $user->setSalt('');
            switch($name){
                case 'membre':
                    $user->setRoles(ProfilTypeEnum::ROLE_USER); 
                    break;
                case 'admin':
                    $user->setRoles(ProfilTypeEnum::ROLE_ADMIN);  
                    break;
            }           
            $manager->persist($user);
        }
        $manager->flush();
    }
}
