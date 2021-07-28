<?php

namespace App\Entity;

use App\Repository\FactureRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=FactureRepository::class)
 */
class Facture
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Pointdevente::class, inversedBy="factures")
     * @ORM\JoinColumn(nullable=false)
     */
    private $pv;

    /**
     * @ORM\OneToMany(targetEntity=Produitquantite::class, mappedBy="facture", orphanRemoval=true)
     */
    private $produitquantites;

    /**
     * @ORM\Column(type="datetime")
     */
    private $date;

    public function __construct()
    {
        $this->produitquantites = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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
            $produitquantite->setFacture($this);
        }

        return $this;
    }

    public function removeProduitquantite(Produitquantite $produitquantite): self
    {
        if ($this->produitquantites->contains($produitquantite)) {
            $this->produitquantites->removeElement($produitquantite);
            // set the owning side to null (unless already changed)
            if ($produitquantite->getFacture() === $this) {
                $produitquantite->setFacture(null);
            }
        }

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self    
    {
        $this->date = $date;

        return $this;
    }
}
