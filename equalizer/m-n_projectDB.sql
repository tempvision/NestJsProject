CREATE DATABASE  IF NOT EXISTS `m-n_project` ;
USE `m-n_project`;
-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: m-n_project
-- ------------------------------------------------------
-- Server version	5.5.5-10.3.11-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `answer`migrationsmigrationspartofmodule
--

DROP TABLE IF EXISTS `answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `answer` (
  `answerId` int(11) NOT NULL AUTO_INCREMENT,
  `answerOptions` varchar(255) NOT NULL,
  `answerValue` int(11) NOT NULL,
  `fk_questionId` int(11) DEFAULT NULL,
  PRIMARY KEY (`answerId`),
  KEY `FK_a9ad0ac6e5342ecf959c2b4b835` (`fk_questionId`),
  CONSTRAINT `FK_a9ad0ac6e5342ecf959c2b4b835` FOREIGN KEY (`fk_questionId`) REFERENCES `question` (`questionId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer`
--

LOCK TABLES `answer` WRITE;
/*!40000 ALTER TABLE `answer` DISABLE KEYS */;
INSERT INTO `answer` VALUES(1 ,'Number', 1, 1),
(2 ,'String', 0, 1),
(3 ,'Boolean', 0, 1),
(4 ,'Undefined', 0, 2),
(5 ,'Array', 0, 2),
(6 ,'Boolean', 1, 2),
(7 ,'Number', 0, 3),
(8 ,'Null', 0, 3),
(9 ,'Object', 1, 3),
(10 ,'*', 0, 4),
(11 ,'=', 1, 4),
(12 ,'-', 0, 4),
(13 ,'!=', 1, 5),
(14 ,'===', 0, 5),
(15 ,'==', 0, 5),
(16 ,'>>', 0, 6),
(17 ,'<<', 0, 6),
(18 ,'<=', 1, 6),
(19 ,'true', 1, 7),
(20 ,'false', 0, 7),
(21 ,'undefined', 0, 7),
(22 ,'true', 0, 8),
(23 ,'false', 1, 8),
(24 ,'undefined', 0, 8),
(25 ,'if i = 5 then', 0, 9),
(26 ,'if (i === 5)', 1, 9),
(27 ,'i = 5', 0, 9),
(28 ,'if (i != 5)', 1, 10),
(29 ,'if i =! 5 then', 0, 10),
(30 ,'if (i <> 5)', 0, 10),
(31 ,'Good morning', 0, 11),
(32 ,'Good day', 0, 11),
(33 ,'Goof evening', 1, 11),
(34 ,'break', 1, 12),
(35 ,'continue', 0, 12),
(36 ,'stop', 0, 12),
(37 ,'while i = 1 to 10', 0, 13),
(38 ,'while (i <= 10)', 1, 13),
(39 ,'while (i <= 10; i++)', 0, 13),
(40 ,'1', 1, 14),
(41 ,'0', 0, 14),
(42 ,'undefined', 0, 14),
(43 ,'Array', 1, 15),
(44 ,'Object', 0, 15),
(45 ,'String', 0, 15),
(46 ,'for (i = 0; i <= 5; i++)', 1, 16),
(47 ,'for (i = 0; i <= 5)', 0, 16),
(48 ,'for (i <= 5; i++)', 0, 16),
(49 ,'var colors = red, green, blue', 0, 17),
(50 ,'var colors = (1: red, 2: green, 3: blue)', 0, 17),
(51 ,'var colors = [red, green, blue]', 1, 17),
(52 ,'arr[0]', 0, 18),
(53 ,'arr[1]', 1, 18),
(54 ,'arr[2]', 0, 18),
(55 ,'false', 0, 19),
(56 ,'true', 1, 19),
(57 ,'undefined', 0, 19),
(58 ,'push', 1, 20),
(59 ,'add', 0, 20),
(60 ,'pop', 0, 20),
(61 ,'Some thing in JS', 0, 21),
(62 ,'Don`t know', 0, 21),
(63 ,'Closure is a locally declared variable related to a function which stays in memory when the function has returned ', 1, 21),
(64 ,'Undefined', 0, 22),
(65 ,'Number', 1, 22),
(66 ,'Boolean', 0, 22),
(67 ,'Every time', 0, 23),
(68 ,'Don`t know', 0, 23),
(69 ,'Variable that is not available to be reassigned', 1, 23),
(70 ,'Don`t know', 0, 24),
(71 ,'Method in js', 0, 24),
(72 ,' JavaScript shows errors for a piece of codes, which did not show an error before, but might be problematic and potentially unsafe', 1, 24),
(73 ,'Some thing in JS', 0, 25),
(74 ,'Place in code when variables can be used only in same function and nested function. ', 0, 25),
(75 ,'Don`t know', 1, 25),
(76 ,'Link', 0, 26),
(77 ,'Linked List', 1, 26),
(78 ,'First Link', 0, 26),
(79 ,'Binary search', 0, 27),
(80 ,'Bubble search', 0, 27),
(81 ,'Linear search', 1, 27),
(82 ,'1 link field', 0, 28),
(83 ,'2 link fields', 1, 28),
(84 ,'3 link fields', 0, 28),
(85 ,'O(log n)', 1, 29),
(86 ,'O(nk)', 0, 29),
(87 ,'O(n + k)', 0, 29),
(88 ,'Optimized time consume', 0, 30),
(89 ,'Optimized space', 0, 30),
(90 ,'Optimized searching', 1, 30),
(91 ,'Node', 0, 31),
(92 ,'Index', 1, 31),
(93 ,'Entity', 0, 31);
/*!40000 ALTER TABLE `answer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jsmodule`
--

DROP TABLE IF EXISTS `jsmodule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `jsmodule` (
  `moduleId` int(11) NOT NULL AUTO_INCREMENT,
  `moduleName` varchar(255) NOT NULL,
  `isActive` tinyint(4) NOT NULL,
  PRIMARY KEY (`moduleId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jsmodule`
--

LOCK TABLES `jsmodule` WRITE;
/*!40000 ALTER TABLE `jsmodule` DISABLE KEYS */;
INSERT INTO `jsmodule` VALUES(1, 'Input Quiz', 1),
  (2, 'Module 1', 0);
/*!40000 ALTER TABLE `jsmodule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partofmodule`
--

DROP TABLE IF EXISTS `partofmodule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `partofmodule` (
  `partId` int(11) NOT NULL AUTO_INCREMENT,
  `partName` varchar(255) NOT NULL,
  `fk_moduleId` int(11) DEFAULT NULL,
  PRIMARY KEY (`partId`),
  KEY `FK_1fa5dbbf13b8156dfbc0e75e761` (`fk_moduleId`),
  CONSTRAINT `FK_1fa5dbbf13b8156dfbc0e75e761` FOREIGN KEY (`fk_moduleId`) REFERENCES `jsmodule` (`moduleId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partofmodule`
--

LOCK TABLES `partofmodule` WRITE;
/*!40000 ALTER TABLE `partofmodule` DISABLE KEYS */;
INSERT INTO `partofmodule` VALUES(1, 'Data typesand Variable', 1),
  (2, 'Operators and expresion', 1),
  (3, 'Conditional statement', 1),
  (4, 'Loops', 1),
  (5, 'Array', 1),
  (6, 'Javascript Core', 2),
  (7, 'Data Structures and Algorithms', 2);
/*!40000 ALTER TABLE `partofmodule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `question` (
  `questionId` int(11) NOT NULL AUTO_INCREMENT,
  `question` varchar(255) NOT NULL,
  `fk_partId` int(11) DEFAULT NULL,
  PRIMARY KEY (`questionId`),
  KEY `FK_71448fa800d4576cc938905c204` (`fk_partId`),
  CONSTRAINT `FK_71448fa800d4576cc938905c204` FOREIGN KEY (`fk_partId`) REFERENCES `partofmodule` (`partId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` VALUES (1, 'What is the type of let x = 42', 1),
(2, 'What is the type of let y = true', 1),
(3, 'What is the type of let z = {firstName : "John", age: 25}', 1),
(4, 'How do you declare a JavaScript variable?', 1),
(5, 'How to check if given variable has equal value and type', 2),
(6, 'What operators we use to check if given vaiable is less than or equal to', 2),
(7, 'If let x = true and let y = true, what was be the result of x && y ', 2),
(8, 'If let x = true and let y = true, what was be the result of x || y ', 2),
(9, 'How to write an IF statement in JavaScript?', 3),
(10, 'How to write an IF statement for executing some code if i is NOT equal to 5?', 3),
(11, 'If let time = 21:00 what was be the result  if (time < 10) { greeting = "Good morning";  } else if (time < 20) { greeting = "Good day"; } else {  greeting = "Good evening"; } ', 3),
(12, 'Whit what word we stops code execution in swich statement', 3),
(13, 'How does a WHILE loop start?', 4),
(14, 'If we have:  var i = 0; do { i += 1;  console.log(i); } while (false);  On end of this i is equal to:', 4),
(15, 'With what we use for..in statement?', 4),
(16, 'How does a FOR loop start?', 4),
(17, 'What is the correct way to write a JavaScript array?', 5),
(18, 'If let arr = [1,2,3]  how we can get the second value?', 5),
(19, 'What was the result of Array.isArray([1,2,3])?', 5),
(20, 'How we can add element to the end of array ?', 5),
(21, 'What is a "closure" in JavaScript', 6),
(22, 'What is NaN? What is its type', 6),
(23, 'When we use const?', 6),
(24, 'What means "use strict"?', 6),
(25, 'What is function scope?', 6),
(26, 'List that contains connection link to first link in a', 7),
(27, 'A search that is made over all items one by one is called ', 7),
(28, 'In Doubly Linked list, each link carries a data field(s) and', 7),
(29, 'Binary search has a worst-case complexity of', 7),
(30, 'Sorting is important because of', 7);
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `isAdmin` tinyint(4) NOT NULL DEFAULT 0,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usersanswers`
--

DROP TABLE IF EXISTS `usersanswers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `usersanswers` (
  `userUserId` int(11) NOT NULL,
  `answerAnswerId` int(11) NOT NULL,
  PRIMARY KEY (`userUserId`,`answerAnswerId`),
  KEY `FK_682d428b49c8eaeba78cf5d0ac0` (`answerAnswerId`),
  CONSTRAINT `FK_493135141c5b0d7a907a9ce6f33` FOREIGN KEY (`userUserId`) REFERENCES `user` (`userId`) ON DELETE CASCADE,
  CONSTRAINT `FK_682d428b49c8eaeba78cf5d0ac0` FOREIGN KEY (`answerAnswerId`) REFERENCES `answer` (`answerId`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usersanswers`
--

LOCK TABLES `usersanswers` WRITE;
/*!40000 ALTER TABLE `usersanswers` DISABLE KEYS */;
/*!40000 ALTER TABLE `usersanswers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'm-n_project'
--

--
-- Dumping routines for database 'm-n_project'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-06 20:27:56
