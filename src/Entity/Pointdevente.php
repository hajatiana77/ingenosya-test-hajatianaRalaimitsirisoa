<?php

namespace App\Entity;

use App\Repository\PointdeventeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PointdeventeRepository::class)
 */
class Pointdevente
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nom_pv;

    /**
     * @ORM\ManyToMany(targetEntity=User::class)
     */
    private $user;

    /**
     * @ORM\OneToMany(targetEntity=Produit::class, mappedBy="pv", orphanRemoval=true)
     */
    private $produits;

    /**
     * @ORM\OneToMany(targetEntity=Facture::class, mappedBy="pv")
     */
    private $factures;

    public function __construct()
    {
        $this->user = new ArrayCollection();
        $this->produits = new ArrayCollection();
        $this->factures = new ArrayCollection();                               
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomPv(): ?string
    {
        return $this->nom_pv;
    }

    public function setNomPv(string $nom_pv): self
    {
        $this->nom_pv = $nom_pv;

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getUser(): Collection
    {
        return $this->user;
    }

    public function addUser(User $user): self
    {
        if (!$this->user->contains($user)) {
            $this->user[] = $user;
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->user->contains($user)) {
            $this->user->removeElement($user);
        }

        return $this;
    }

    /**
     * @return Collection|Produit[]
     */
    public function getProduits(): Collection
    {
        return $this->produits;
    }

    public function addProduit(Produit $produit): self
    {
        if (!$this->produits->contains($produit)) {
            $this->produits[] = $produit;
            $produit->setPv($this);
        }

        return $this;
    }

    public function removeProduit(Produit $produit): self
    {
        if ($this->produits->contains($produit)) {
            $this->produits->removeElement($produit);
            // set the owning side to null (unless already changed)
            if ($produit->getPv() === $this) {
                $produit->setPv(null);
            }
        }

        return $this;
    }
    
    public function __toString() {
        return (string)$this->nom_pv;
    }

    /**
     * @return Collection|Facture[]
     */
    public function getFactures(): Collection
    {
        return $this->factures;
    }

    public function addFacture(Facture $facture): self
    {
        if (!$this->factures->contains($facture)) {
            $this->factures[] = $facture;
            $facture->setPv($this);
        }

        return $this;
    }

    public function removeFacture(Facture $facture): self
    {
        if ($this->factures->contains($facture)) {
            $this->factures->removeElement($facture);
            // set the owning side to null (unless already changed)
            if ($facture->getPv() === $this) {
                $facture->setPv(null);
            }
        }

        return $this;
    }         

}
