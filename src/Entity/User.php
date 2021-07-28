<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

use Symfony\Component\Security\Core\User\UserInterface;
use App\Entity\Roles;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @UniqueEntity(fields={"username"}, message="There is already an account with this username")
 */
class User implements UserInterface
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;
    
    /**
    * @ORM\Column(name="username", type="string", length=255, unique=true)
    */
    private $username;
    
    /**
    * @ORM\Column(name="email", type="string", length=255, unique=true)
    */
    private $email;

    /**
    * @ORM\Column(name="password", type="string", length=255)
    */
    private $password;

    /**
    * @ORM\Column(name="salt", type="string", length=255, nullable=true)
    */
    private $salt;
    
    /**
    * @ORM\Column(name="enable", type="boolean")
    */
    private $enable;
    
    /**
     * @ORM\Column(name="roles", type="array")         
    */    
    private $roles=array();    
    
    /**
     * User constructor.
     */
    public function __construct()
    {
        $this->enable = false;                          
    }

    public function getId(): ?int
    {
        return $this->id;
    }
    
    public function getUsername(): ? string
    {
        return $this->username;
    }
    
    public function setUsername(string $username): self
    {
        $this->username=$username; 
        return $this;  
    }        
    
    public function getEmail(): ? string
    {
        return $this->email;
    }
    
    public function setEmail( string $email): self
    {
        $this->email=$email;
        return $this;
    } 
    
    public function getPassword(): ? string
    {
        return $this->password;
    }
    
    public function setPassword(string $password): ? self
    {
        $this->password=$password;
        return $this;
    }
    
    public function getSalt(): ? string
    {
        return $this->salt;
    } 
    
    public function setSalt(string $salt): ? self
    {
        $this->salt=$salt;
        return $this;
    }
    
    public function getEnable(): ?bool
    {
        return $this->enable;
    }

    public function setEnable(bool $enable): self
    {
        $this->enable = $enable;

        return $this;
    }
      
    public function getRoles(): array
    {
        $roles = $this->roles;                
        //$roles[] = 'ROLE_USER';
        return array_unique($roles);
    }
    
    public function setRoles(array $roles): ? self
    {
        $this->roles=$roles;
        return $this;
    }
    
    public function __toString() {
        return (string)$this->username;
    }
    
    public function eraseCredentials()
    {

    }    
}
