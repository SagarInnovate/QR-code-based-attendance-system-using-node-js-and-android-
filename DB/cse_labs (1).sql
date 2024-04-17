-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 02, 2023 at 09:05 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cse_labs`
--

-- --------------------------------------------------------

--
-- Table structure for table `entries`
--

CREATE TABLE `entries` (
  `id` int(11) NOT NULL,
  `prn` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time_in` time DEFAULT NULL,
  `time_out` time DEFAULT NULL,
  `lab_no` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `entries`
--

INSERT INTO `entries` (`id`, `prn`, `date`, `time_in`, `time_out`, `lab_no`) VALUES
(1, 9991, '2023-10-14', '27:27:06', '23:27:30', NULL),
(2, 9991, '2023-10-04', '27:27:06', '23:27:30', '1'),
(3, 1000001, '2022-10-22', '06:23:10', '17:08:28', NULL),
(5, 1000003, '2022-10-30', '04:08:10', '09:30:18', NULL),
(6, 1000004, '2023-10-05', '02:32:22', '05:05:43', NULL),
(7, 1000005, '2023-05-24', '16:14:10', '03:16:53', NULL),
(8, 1000006, '2023-02-08', '14:02:23', '19:59:27', NULL),
(9, 1000007, '2023-06-24', '01:31:22', '06:20:50', NULL),
(10, 1000008, '2023-08-14', '05:42:50', '02:02:52', NULL),
(11, 1000009, '2023-07-10', '13:10:07', '02:09:29', NULL),
(12, 1000010, '2022-10-08', '11:25:42', '05:01:26', NULL),
(13, 1000011, '2023-08-21', '07:13:07', '23:31:38', NULL),
(14, 1000012, '2023-01-27', '12:28:52', '22:06:41', NULL),
(15, 1000013, '2023-08-26', '12:12:30', '22:07:49', NULL),
(16, 1000014, '2022-12-27', '09:38:01', '05:58:14', NULL),
(17, 1000015, '2023-06-15', '19:07:12', '15:41:27', NULL),
(18, 1000016, '2023-07-29', '14:24:17', '04:06:56', NULL),
(19, 1000017, '2023-05-14', '04:38:41', '13:39:39', NULL),
(20, 1000018, '2023-06-20', '12:41:55', '13:03:33', NULL),
(21, 1000019, '2023-02-19', '11:28:58', '10:15:00', NULL),
(22, 1000020, '2023-07-18', '02:49:51', '19:32:14', NULL),
(23, 1000021, '2023-03-09', '03:04:54', '06:43:47', NULL),
(24, 1000022, '2022-12-25', '12:16:47', '03:25:39', NULL),
(25, 1000023, '2023-09-27', '03:37:42', '16:12:04', NULL),
(26, 1000024, '2023-01-22', '07:26:18', '04:02:37', NULL),
(27, 1000025, '2023-09-23', '06:17:38', '07:40:22', NULL),
(28, 1000026, '2022-11-15', '07:56:45', '22:30:39', NULL),
(29, 1000027, '2023-01-10', '17:30:17', '23:56:49', NULL),
(30, 1000028, '2023-06-13', '01:28:05', '01:05:11', NULL),
(31, 1000029, '2023-01-17', '00:55:34', '02:45:30', NULL),
(32, 1000030, '2023-07-06', '17:59:41', '12:25:36', NULL),
(33, 1000002, '2022-10-06', '51:40:44', '17:24:49', NULL),
(34, 1000002, '2023-10-08', '00:36:32', '01:26:45', NULL),
(43, 1000002, '2023-10-08', '01:23:16', '01:30:53', NULL),
(44, 1000002, '2023-10-08', '01:26:42', '01:32:16', NULL),
(45, 1000002, '2023-10-08', '01:30:51', '01:32:16', NULL),
(46, 1000002, '2023-10-08', '01:34:35', '01:34:45', NULL),
(47, 1000002, '2023-10-08', '01:34:39', '01:34:45', NULL),
(48, 12345678, '2023-10-08', '10:15:57', '10:16:24', NULL),
(49, 12345678, '2023-10-08', '10:16:11', '10:16:24', NULL),
(50, 12345678, '2023-10-08', '10:16:17', '10:16:24', NULL),
(51, 1000002, '2023-10-08', '12:21:53', '12:22:27', '1'),
(52, 1000002, '2023-10-08', '12:22:02', '12:22:27', '1'),
(53, NULL, NULL, NULL, NULL, NULL),
(54, NULL, NULL, NULL, NULL, NULL),
(55, NULL, NULL, NULL, NULL, NULL),
(56, 1234567, '2023-10-20', '08:30:00', '16:30:00', 'Lab-A'),
(57, 1000002, '2023-10-05', '22:52:00', '12:52:00', '2'),
(58, 7235, '2023-10-19', '23:52:00', '17:52:00', '228');

-- --------------------------------------------------------

--
-- Table structure for table `labs`
--

CREATE TABLE `labs` (
  `id` int(11) NOT NULL,
  `lab_no` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `computer` int(11) NOT NULL,
  `chairs` int(11) NOT NULL,
  `capacity` int(11) NOT NULL,
  `prof_name` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `labs`
--

INSERT INTO `labs` (`id`, `lab_no`, `username`, `password`, `computer`, `chairs`, `capacity`, `prof_name`, `department`) VALUES
(1, '1', 'lab@1', '123456', 20, 30, 50, 'Prof A', 'Computer Science'),
(2, '1', 'lab@2', '123456', 15, 25, 40, 'Prof B', 'Electrical Engineering'),
(3, '3', 'lab@3', '123456', 18, 28, 45, 'Prof C', 'Mechanical Engineering'),
(4, '4', 'lab@4', '123456', 22, 32, 55, 'Prof D', 'Civil Engineering');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `prn` varchar(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `class` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `prn`, `name`, `class`) VALUES
(1, '9991', 'shinde sagar', 'ty. cse'),
(3, '1000001', 'John Doe', 'Class A'),
(4, '1000002', 'Jane Smith', 'Class B'),
(5, '1000003', 'Alice Johnson', 'Class A'),
(6, '1000004', 'Bob Wilson', 'Class C'),
(7, '1000005', 'Eve Brown', 'Class B'),
(8, '1000006', 'Charlie Lee', 'Class A'),
(9, '1000007', 'Grace Davis', 'Class C'),
(10, '1000008', 'Daniel White', 'Class A'),
(11, '1000009', 'Hannah Martinez', 'Class B'),
(12, '1000010', 'Oliver Taylor', 'Class C'),
(13, '1000011', 'Sophia Anderson', 'Class A'),
(14, '1000012', 'James Wilson', 'Class B'),
(15, '1000013', 'Lily Thompson', 'Class C'),
(16, '1000014', 'William Hall', 'Class A'),
(17, '1000015', 'Emily Clark', 'Class B'),
(18, '1000016', 'Henry Lewis', 'Class C'),
(19, '1000017', 'Ava Harris', 'Class A'),
(20, '1000018', 'Michael Turner', 'Class B'),
(21, '1000019', 'Sophia Martin', 'Class C'),
(22, '1000020', 'Benjamin Scott', 'Class A'),
(23, '1000021', 'Ella Walker', 'Class B'),
(24, '1000022', 'Samuel Green', 'Class C'),
(25, '1000023', 'Elizabeth Baker', 'Class A'),
(26, '1000024', 'Matthew Adams', 'Class B'),
(27, '1000025', 'Charlotte Hill', 'Class C'),
(28, '1000026', 'Daniel King', 'Class A'),
(29, '1000027', 'Mia Brooks', 'Class B'),
(30, '1000028', 'Jackson Carter', 'Class C'),
(31, '1000029', 'Abigail Young', 'Class A'),
(32, '1000030', 'Christopher Reed', 'Class B'),
(33, '12345678', '12345678', '3 year');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `entries`
--
ALTER TABLE `entries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `labs`
--
ALTER TABLE `labs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `prn` (`prn`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `entries`
--
ALTER TABLE `entries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `labs`
--
ALTER TABLE `labs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
