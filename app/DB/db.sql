USE issPos;

-- messages
DROP TABLE IF EXISTS `location`;
CREATE TABLE `location`
(
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `longitude` VARCHAR (24) NOT NULL,
  `latitude` VARCHAR(255) NOT NULL,
  `created` VARCHAR(64) NOT NULL,
  PRIMARY KEY(`id`)
);
