
Configuration minimum: Apache, Php 7.4, Mysql 5.7
framework : symfony 4

1) copiez le projet dans la racine de wamp64 ou xampp=>C:\wamp64\www
2) importez la base de données conception.sql dans une nouvelle base de donnée nouvellement crée gestion_supermarche dans phpMyadmin
3) en ligne de commande, dans la racine du projet C:\wamp64\www\gestion_supermarche, faire demarrer le serveur web =>
	php bin/console server:run ou symfony server:start
4) lancer sur l'application sous l'url http://localhost:8000 ou http://localhost:8080 selon le port disponible
5) pour se connecter par username :
	espace admin: login=admin pass=admin2021, 
	espace membre: login=membre pass=membre2021, 
	NB: les nouveaux membres (vendeurs) doivent s'inscrire dans le site et doivent être activé par l'administrateur 
	pour pouvoir se connecter dans l'espace membre
6) non traité par faute de temps : 
	1) generation PDF de facture lors de la facturation
	2) import Excel de produits 
7) espace de vente (pour membre)
	- Espace de vente (page principal): liste de point des ventes avec lien VOIR
	- lien VOIR: pour voir les produits à facturer et la facturation prpprement dite
	- ménu Point de vente: CRUD point de vente
	- ménu Produit : CRUD produit
	- NB: l'affectation de vendeur dans son point de vente est fait par un membre déjà activé lors de création de nouveau point de vente 
		ou par modification de point de vente. Suggestion: cette partie doit être déplacé dans l'espace admin
8) espace admin (pour admin)
	- gestion des membres (vendeurs)
	- ménu graphes produit : recette journalière et courbe de produit les plus vendus
	- ménu graphes de point de vente : graphe des points des ventes  qui rapportent de plus de recette
	NB : le graphe nécessite l'activation de l'extension php gd2 dans wamp server

