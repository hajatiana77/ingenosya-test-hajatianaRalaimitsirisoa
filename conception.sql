
DROP TABLE IF EXISTS `facture`;
CREATE TABLE IF NOT EXISTS `facture` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pv_id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_FE866410E8A4F4B0` (`pv_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `facture` (`id`, `pv_id`, `date`) VALUES
(6, 1, '2021-07-24 11:59:54'),
(7, 1, '2021-07-24 12:04:30'),
(10, 1, '2021-07-24 12:10:55'),
(11, 1, '2021-07-24 12:27:09'),
(12, 1, '2021-07-24 12:32:11'),
(13, 1, '2021-07-24 14:02:26'),
(14, 1, '2021-07-26 12:49:14'),
(15, 2, '2021-07-24 17:58:13');

DROP TABLE IF EXISTS `pointdevente`;
CREATE TABLE IF NOT EXISTS `pointdevente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom_pv` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `pointdevente` (`id`, `nom_pv`) VALUES
(1, 'tanjombato'),
(2, 'antsahabe');

DROP TABLE IF EXISTS `pointdevente_user`;
CREATE TABLE IF NOT EXISTS `pointdevente_user` (
  `pointdevente_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`pointdevente_id`,`user_id`),
  KEY `IDX_67289E6ADB2504C7` (`pointdevente_id`),
  KEY `IDX_67289E6AA76ED395` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `pointdevente_user` (`pointdevente_id`, `user_id`) VALUES
(1, 1),
(1, 24),
(2, 28),
(2, 29);

DROP TABLE IF EXISTS `produit`;
CREATE TABLE IF NOT EXISTS `produit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pv_id` int(11) NOT NULL,
  `nom_pdt` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prix_unitaire` double DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_29A5EC27E8A4F4B0` (`pv_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `produit` (`id`, `pv_id`, `nom_pdt`, `prix_unitaire`) VALUES
(1, 1, 'sucre', 2500),
(2, 1, 'sel', 500),
(3, 2, 'sucre', 1400),
(4, 1, 'cigarette', 36000),
(5, 2, 'cigarette', 35000),
(6, 1, 'stylo', 500),
(7, 1, 'gomme', 120),
(8, 1, 'cahier', 1500),
(9, 1, 'cartable', 150000),
(10, 1, 'casquette', 20000),
(11, 1, 'patalon', 25000),
(12, 1, 'chemise', 7000),
(13, 1, 'vello', 70000),
(14, 1, 'pince', 4000),
(15, 1, 'marteau', 4000),
(16, 1, 'pelle', 6000);

DROP TABLE IF EXISTS `produitquantite`;
CREATE TABLE IF NOT EXISTS `produitquantite` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `facture_id` int(11) NOT NULL,
  `produit_id` int(11) NOT NULL,
  `quantite` double NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_3941207D7F2DEE08` (`facture_id`),
  KEY `IDX_3941207DF347EFB` (`produit_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `produitquantite` (`id`, `facture_id`, `produit_id`, `quantite`) VALUES
(1, 6, 8, 1),
(2, 6, 14, 2),
(3, 7, 9, 4),
(4, 7, 10, 3),
(5, 7, 12, 5),
(6, 7, 7, 8),
(7, 7, 11, 7),
(8, 7, 16, 9),
(13, 10, 2, 2),
(14, 10, 13, 1),
(15, 11, 12, 50),
(16, 12, 11, 10),
(17, 13, 7, 12),
(18, 14, 14, 5),
(19, 15, 5, 4),
(20, 15, 3, 10);

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `salt` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `enable` tinyint(1) NOT NULL,
  `roles` longtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '(DC2Type:array)',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_8D93D649F85E0677` (`username`),
  UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `user` (`id`, `username`, `email`, `password`, `salt`, `enable`, `roles`) VALUES
(1, 'membre', 'membre@yahoo.com', 'membre2021', '', 1, 'a:1:{i:0;s:9:\"ROLE_USER\";}'),
(2, 'admin', 'admin@yahoo.com', 'admin2021', '', 0, 'a:1:{i:0;s:10:\"ROLE_ADMIN\";}'),
(24, 'rakoto', 'rakoto@yahoo.com', 'rakoto2021', NULL, 0, 'a:1:{i:0;s:9:\"ROLE_USER\";}'),
(25, 'rabe', 'rabe@yahoo.com', 'rabe2021', NULL, 0, 'a:1:{i:0;s:9:\"ROLE_USER\";}'),
(28, 'aaaaaa', 'aaaaaa@yahoo.com', 'aaaa2021', NULL, 1, 'a:1:{i:0;s:9:\"ROLE_USER\";}'),
(29, 'fffff', 'ffffff@yahoo.com', 'fffff2021', NULL, 0, 'a:1:{i:0;s:9:\"ROLE_USER\";}');


ALTER TABLE `facture`
  ADD CONSTRAINT `FK_FE866410E8A4F4B0` FOREIGN KEY (`pv_id`) REFERENCES `pointdevente` (`id`);

ALTER TABLE `pointdevente_user`
  ADD CONSTRAINT `FK_67289E6AA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_67289E6ADB2504C7` FOREIGN KEY (`pointdevente_id`) REFERENCES `pointdevente` (`id`) ON DELETE CASCADE;

ALTER TABLE `produit`
  ADD CONSTRAINT `FK_29A5EC27E8A4F4B0` FOREIGN KEY (`pv_id`) REFERENCES `pointdevente` (`id`);

ALTER TABLE `produitquantite`
  ADD CONSTRAINT `FK_3941207D7F2DEE08` FOREIGN KEY (`facture_id`) REFERENCES `facture` (`id`),
  ADD CONSTRAINT `FK_3941207DF347EFB` FOREIGN KEY (`produit_id`) REFERENCES `produit` (`id`);
COMMIT;

