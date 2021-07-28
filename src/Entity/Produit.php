<?php

namespace App\Entity;

use App\Repository\ProduitRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ProduitRepository::class)
 */
class Produit
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
    private $nom_pdt;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $prix_unitaire;

    /**
     * @ORM\ManyToOne(targetEntity=Pointdevente::class, inversedBy="produits")
     * @ORM\JoinColumn(nullable=false)
     */
    private $pv;

    /**
     * @ORM\OneToMany(targetEntity=Produitquantite::class, mappedBy="produit", orphanRemoval=true)
     */
    private $produitquantites;   

    public function __construct()
    {
        $this->produitquantites = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomPdt(): ?string
    {
        return $this->nom_pdt;
    }

    public function setNomPdt(string $nom_pdt): self
    {
        $this->nom_pdt = $nom_pdt;

        return $this;
    }

    public function getPrixUnitaire(): ?float
    {
        return $this->prix_unitaire;
    }

    public function setPrixUnitaire(?float $prix_unitaire): self
    {
        $this->prix_unitaire = $prix_unitaire;

        return $this;
    }

    public function getPv(): ?Pointdevente
    {
        return $this->pv;
    }

    public function setPv(?Pointdevente $pv): self
    {
        $this->pv = $pv;

        return $this;
    }

    /**
     * @return Collection|Produitquantite[]
     */
    public function getProduitquantites(): Collection
    {
        return $this->produitquantites;
    }

    public function addProduitquantite(Produitquantite $produitquantite): self
    {
        if (!$this->produitquantites->contains($produitquantite)) {
            $this->produitquantites[] = $produitquantite;
            $produitquantite->setProduit($this);
        }

        return $this;
    }

    public function removeProduitquantite(Produitquantite $produitquantite): self
    {
        if ($this->produitquantites->contains($produitquantite)) {
            $this->produitquantites->removeElement($produitquantite);
            // set the owning side to null (unless already changed)
            if ($produitquantite->getProduit() === $this) {
                $produitquantite->setProduit(null);
            }
        }

        return $this;
    }  
}
