CREATE DATABASE  IF NOT EXISTS `hotel2` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `hotel2`;
-- MySQL dump 10.13  Distrib 8.0.26, for Linux (x86_64)
--
-- Host: localhost    Database: hotel
-- ------------------------------------------------------
-- Server version	8.0.26-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Books`
--

DROP TABLE IF EXISTS `Books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Books` (
  `Id` int NOT NULL,
  `Title` varchar(100) DEFAULT NULL,
  `Author` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Books`
--

LOCK TABLES `Books` WRITE;
/*!40000 ALTER TABLE `Books` DISABLE KEYS */;
INSERT INTO `Books` VALUES (1,'War and Peace','Leo Tolstoy'),(2,'The Brothers Karamazov','Fyodor Dostoyevsky'),(3,'Paradise Lost','John Milton'),(4,'Crime and Punishment','Fyodor Dostoyevsky'),(5,'Cousin Bette','Honore de Balzac'),(6,'Refactorign','Martin Fowler'),(7,'The Complete Software Developer’s Career Guide ','John Sonmez');
/*!40000 ALTER TABLE `Books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Books_Lent`
--

DROP TABLE IF EXISTS `Books_Lent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Books_Lent` (
  `book_rental` int NOT NULL AUTO_INCREMENT,
  `book_id` int DEFAULT NULL,
  `customer_id` int DEFAULT NULL,
  `rental_date` datetime DEFAULT NULL,
  `rental_return_date` datetime DEFAULT NULL,
  `returned` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`book_rental`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Books_Lent`
--

LOCK TABLES `Books_Lent` WRITE;
/*!40000 ALTER TABLE `Books_Lent` DISABLE KEYS */;
INSERT INTO `Books_Lent` VALUES (1,1,2,'2020-02-05 00:00:00',NULL,0),(2,2,2,'2020-02-05 16:17:39','2021-09-18 18:54:34',1),(3,3,2,'2020-02-05 16:17:39',NULL,0),(4,2,2,'2020-02-05 16:17:39','2021-09-18 18:54:34',1),(5,4,2,'2020-02-05 16:17:39','2021-09-18 18:54:34',1),(6,5,2,'2020-02-05 16:17:39',NULL,0),(7,4,2,'2020-02-05 16:17:39','2021-09-18 18:54:34',1);
/*!40000 ALTER TABLE `Books_Lent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CarSales`
--

DROP TABLE IF EXISTS `CarSales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CarSales` (
  `CarID` int NOT NULL,
  `CustomerID` int DEFAULT NULL,
  PRIMARY KEY (`CarID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CarSales`
--

LOCK TABLES `CarSales` WRITE;
/*!40000 ALTER TABLE `CarSales` DISABLE KEYS */;
INSERT INTO `CarSales` VALUES (1,2),(2,2),(3,1),(4,4),(5,4);
/*!40000 ALTER TABLE `CarSales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Cars`
--

DROP TABLE IF EXISTS `Cars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Cars` (
  `Id` int NOT NULL,
  `Name` varchar(50) DEFAULT NULL,
  `Cost` int DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Cars`
--

LOCK TABLES `Cars` WRITE;
/*!40000 ALTER TABLE `Cars` DISABLE KEYS */;
INSERT INTO `Cars` VALUES (1,'Audi',52642),(2,'Mercedes',57127),(3,'Skoda',9000),(4,'Volvo',29000),(5,'Bentley',350000),(6,'Citroen',21000),(7,'Hummer',41400),(8,'Volkswagen',21600);
/*!40000 ALTER TABLE `Cars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Customers`
--

DROP TABLE IF EXISTS `Customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Customers` (
  `CustomerId` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(55) DEFAULT NULL,
  PRIMARY KEY (`CustomerId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Customers`
--

LOCK TABLES `Customers` WRITE;
/*!40000 ALTER TABLE `Customers` DISABLE KEYS */;
INSERT INTO `Customers` VALUES (1,'Paul Novak'),(2,'Terry Neils'),(3,'Jack Fonda'),(4,'Tom Willis');
/*!40000 ALTER TABLE `Customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Reservations`
--

DROP TABLE IF EXISTS `Reservations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Reservations` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `CustomerId` int DEFAULT NULL,
  `Day` date DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Reservations`
--

LOCK TABLES `Reservations` WRITE;
/*!40000 ALTER TABLE `Reservations` DISABLE KEYS */;
INSERT INTO `Reservations` VALUES (1,1,'2009-11-22'),(2,2,'2009-11-28'),(3,2,'2009-11-29'),(4,1,'2009-11-29'),(5,3,'2009-12-02');
/*!40000 ALTER TABLE `Reservations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-26 22:47:10
