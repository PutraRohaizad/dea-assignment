-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 17, 2019 at 10:47 AM
-- Server version: 10.1.24-MariaDB
-- PHP Version: 7.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejs_login`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `company_name` text,
  `company_pic` text,
  `register_no` text,
  `password` text,
  `company_address` text,
  `company_cert` text,
  `company_depart` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `company_name`, `company_pic`, `register_no`, `password`, `company_address`, `company_cert`, `company_depart`) VALUES
(1, 'dea', 'abu', 'a12345', '1234', 'cyberjaya', NULL, NULL),
(2, 'Google', 'Ali', 'b12345', '1234', 'Singapore', NULL, NULL),
(9, 'ESPN', 'ali', 'c12345', '1234', 'Kuala Lumpur', NULL, NULL),
(10, 'Facebook', 'Lai tu yu', 'd12345', '1234', 'Melaka', NULL, NULL),
(11, 'Myspace', 'Jamil', 'e12345', '1234', 'Johor', 'C:\\fakepath\\tsconfig.json', '1'),
(12, 'test', 'test', 'test', '1234', 'test', 'C:\\fakepath\\a.jpeg', '2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
