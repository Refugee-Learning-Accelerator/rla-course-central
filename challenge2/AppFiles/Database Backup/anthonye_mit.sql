
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
DROP TABLE IF EXISTS `tbl_schools`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_schools` (
  `schoolID` int(11) NOT NULL AUTO_INCREMENT,
  `schoolName` varchar(50) NOT NULL,
  `schoolLong` double NOT NULL,
  `schoolLat` double NOT NULL,
  `schoolDescription` text NOT NULL,
  `schoolFees` int(11) NOT NULL,
  PRIMARY KEY (`schoolID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `tbl_schools` WRITE;
/*!40000 ALTER TABLE `tbl_schools` DISABLE KEYS */;
INSERT INTO `tbl_schools` VALUES (1,'Lebanon Evangelical School',33.8349723815918,35.56938171386719,'The School was founded in 1860 by a British lady called Mrs. Bowen Thompson. Her husband had recently died and when she heard of the sufferings in Lebanon due to the civil strife that was present in the country during the early part of 1860, she sailed to Lebanon to try and be of some use to those people who flocked to Beirut from the mountains in search of security. One of the things she thought would be most useful was to start a school. This she did and so was born the Lebanon Evangelical School for Boys and Girls.',6000000);
/*!40000 ALTER TABLE `tbl_schools` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

