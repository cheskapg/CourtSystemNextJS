-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 09, 2023 at 01:19 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbreservsystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookedcourt`
--

CREATE TABLE `bookedcourt` (
  `id` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `address` varchar(256) NOT NULL,
  `court` varchar(50) NOT NULL,
  `date` varchar(50) NOT NULL,
  `time` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bookedcourt`
--

INSERT INTO `bookedcourt` (`id`, `name`, `phone`, `address`, `court`, `date`, `time`) VALUES
(5, 'Bette Porter', '12345678911', 'New York City', '3', '2022-11-29', '9am-10am'),
(25, 'ss', 'aaaaa', 'aaa', '2', '2023-05-03', '8am-9am'),
(26, 'aaaassss', 'sss', 'ssss', '3', '2023-05-17', '8am-9am'),
(27, 'xxxxaaa', 'xx', 'xxx', '2', '2023-05-10', '11am-12pm'),
(28, 'Margarita', '092323233', 'New York City', '3', '2023-05-25', '9am-10am');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookedcourt`
--
ALTER TABLE `bookedcourt`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookedcourt`
--
ALTER TABLE `bookedcourt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
