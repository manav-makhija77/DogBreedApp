-- MySQL dump 10.13  Distrib 5.1.40, for Win64 (unknown)
--
-- Host: localhost    Database: dogbreed
-- ------------------------------------------------------
-- Server version	5.1.40-community

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

--
-- Table structure for table `contact_us`
--

DROP TABLE IF EXISTS `contact_us`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contact_us` (
  `id` int(3) NOT NULL,
  `name` varchar(40) DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  `query` text,
  `raised_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_us`
--

LOCK TABLES `contact_us` WRITE;
/*!40000 ALTER TABLE `contact_us` DISABLE KEYS */;
/*!40000 ALTER TABLE `contact_us` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dogbreed`
--

DROP TABLE IF EXISTS `dogbreed`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dogbreed` (
  `BreedId` int(2) NOT NULL,
  `BreedName` varchar(40) DEFAULT NULL,
  `Age` varchar(30) DEFAULT NULL,
  `Location` varchar(40) DEFAULT NULL,
  `ownerName` varchar(30) DEFAULT NULL,
  `contactNumber` bigint(9) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `photoURL` varchar(255) DEFAULT NULL,
  `History` varchar(3000) DEFAULT NULL,
  `certificate` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`BreedId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dogbreed`
--

LOCK TABLES `dogbreed` WRITE;
/*!40000 ALTER TABLE `dogbreed` DISABLE KEYS */;
INSERT INTO `dogbreed` VALUES (1,'Labrador','3 Years','Guwahati','Rajesh Kumar',964534632,'Friendly and outgoing, loves being around people and has boundless energy','https://images7.alphacoders.com/413/thumb-1920-413380.jpg','Name: Gigi Age: 3 years Height: 23 inches (58 cm) at the shoulder Weight: 75 pounds (34 kg) Eye Color: Dark Brown Fur Color: Lustrous Golden Coat with a slight wave Breed: Purebred Golden Retriever Diet: High-quality dog food with a balanced protein and carbohydrate mix, supplemented with occasional treats like carrots and apples','https://dogbreedcertificate.s3.ap-south-1.amazonaws.com/Labrador.jpg'),(2,'German Shepherd','6 Years','Guwahati','Jyoti',9876543210,' Loyal and protective, intelligent and versatile, excels in various roles from service to family pet','https://cdn.pixabay.com/photo/2023/11/10/12/20/dog-8379255_640.png','Name: Kiki Age: 3 years Height: 22.5 inches (57 cm) at the shoulder Weight: 70 pounds (32 kg) Eye Color: Warm Brown Fur Color: Short, dense, and glossy Black Coat Breed: Purebred Labrador Retriever Diet: High-quality dog food with a balanced protein and carbohydrate mix, supplemented with occasional treats like carrots and apples','https://dogbreedcertificate.s3.ap-south-1.amazonaws.com/German+Shepherd.jpg'),(3,'Bulldog','5 Years','Guwahati','Bipul',4567890123,'Calm and courageous, known for their wrinkled face and sturdy build, loves lounging','https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Bulldog_inglese.jpg/800px-Bulldog_inglese.jpg','Age: 5 years Height: 14 inches (35.5 cm) at the shoulder Weight: 40 pounds (18 kg) Eye Color: Dark Brown Fur Color: Short, smooth, and glossy Red Brindle coat Breed: Purebred Bulldog Diet: High-quality dog food with a balanced protein and carbohydrate mix, supplemented with occasional treats like carrots and apples','https://dogbreedcertificate.s3.ap-south-1.amazonaws.com/Bulldog.jpg'),(4,'Golden Retriever','3 Years','Guwahati','Kanchana ',7890123456,'Gentle and affectionate, incredibly loyal and easy to train, enjoys outdoor activities and is great with kids','https://www.mygoldenretrieverpuppies.com/wp-content/uploads/2022/06/golden-retriever-personality.jpeg','Name: Roko Age: 6 years Height: 26 inches (66 cm) at the shoulder Weight: 85 pounds (39 kg) Eye Color: Piercing Brown Fur Color: Double-coated, medium-length Black and Tan coat Breed: Purebred German Shepherd Diet: High-quality dog food with a balanced protein and carbohydrate mix, supplemented with occasional treats like carrots and apples','No Certificate Found for this Breed'),(5,'Siberian Husky ','1.5 Years','Guwahati','Rumi',8765432109,'Independent and adventurous, energetic and mischievous, thrives in cold climates and enjoys activities like running and pulling sleds','https://png.pngtree.com/thumb_back/fh260/background/20230516/pngtree-gray-and-white-husky-dog-lying-down-in-the-woods-image_2570600.jpg','Name: Evee Age: 1.5 years Height: 20 inches (50.8 cm) at the shoulder Weight: 45 pounds (20.4 kg) Eye Color: Piercing Blue Fur Color: Thick, double-coated, and glossy Gray and White coat Breed: Purebred Siberian Husky Diet: High-quality dog food with a balanced protein and carbohydrate mix, supplemented with occasional treats like carrots and apples','https://dogbreedcertificate.s3.ap-south-1.amazonaws.com/Husky.jpg'),(6,'German Spitz','4 Years','Guwahati','Barnali',8765432109,'Alert and playful, has a fox-like appearance and a lively personality, forms strong bonds with their family and enjoys being involved in activities','https://wallpapercave.com/wp/wp4669117.jpg','Name: Roger Age: 4 years Height: 12-15 inches (30-38 cm) at the shoulder Weight: 20-30 pounds (9-14 kg) Eye Color: Dark Brown Fur Color: Thick, double-coated, and glossy White or Orange coat Breed: Purebred German Spitz Diet: High-quality dog food with a balanced protein and carbohydrate mix, supplemented with occasional treats like carrots and apples','https://dogbreedcertificate.s3.ap-south-1.amazonaws.com/german+spits.jpg'),(7,'German Shepherd','7 Years','Nagaon','Vikas Solanki',769789876,'Friendly and outgoing, loves being around people and has boundless energy','https://cdn.pixabay.com/photo/2023/11/10/12/20/dog-8379255_640.png',NULL,NULL),(8,'German Spitz','3.5 Years','Nagaon','Bhavya Kumar',877096543,' Alert and playful, has a fox-like appearance and a lively personality, forms strong bonds with their family','https://wallpapercave.com/wp/wp4669117.jpg',NULL,NULL);
/*!40000 ALTER TABLE `dogbreed` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `username` varchar(25) NOT NULL,
  `password` varchar(40) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('',''),('abc','123'),('abcd','1234'),('abcde','123'),('abce','123'),('abdulrajak','Abdul@8272'),('Aman','Aman123'),('ffhtht','123'),('Manav71','Manav'),('Sachin','Sachin123'),('User','123'),('User1','1234'),('User32','123'),('User34','evvwf'),('user434','3423434'),('User5','1234'),('Yash','Yash@123');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-12 19:50:41
