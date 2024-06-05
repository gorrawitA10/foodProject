-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2023 at 06:49 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projectfood`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `aid` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `phone` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`aid`, `name`, `phone`, `username`, `password`) VALUES
(1, 'rose', '0666666666', 'rose66', '6666666666');

-- --------------------------------------------------------

--
-- Table structure for table `basket`
--

CREATE TABLE `basket` (
  `bid` int(11) NOT NULL,
  `cusid` int(11) NOT NULL,
  `fid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `cusid` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `phone` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`cusid`, `name`, `address`, `phone`, `username`, `password`) VALUES
(1, 'jj', '13 ม.5 sterroy', '0888888888', 'jj888', '8888888888'),
(2, 'hong', '19 ม.8 jerryham', '0956983232', 'hong999', '9999999999');

-- --------------------------------------------------------

--
-- Table structure for table `food`
--

CREATE TABLE `food` (
  `fid` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `type` int(11) NOT NULL,
  `price` float NOT NULL,
  `pic` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `food`
--

INSERT INTO `food` (`fid`, `name`, `type`, `price`, `pic`) VALUES
(1, 'กระเพราหมูสับ', 1, 45, 'https://www.proudofficials.com/application/files/cache/thumbnails/2e5e936a36586da03e09a4a39375fb0d.jpg'),
(2, 'ข้าวขาหมู', 1, 50, 'https://images.deliveryhero.io/image/fd-th/LH/bdzk-hero.jpg'),
(3, 'ข้าวไข่เจียว', 1, 40, 'http://f.ptcdn.info/689/035/000/1442885991-imagejpeg-o.jpg'),
(4, 'ข้าวคลุกกะปิ', 1, 45, 'https://img.wongnai.com/p/1920x0/2018/09/15/81c5e3d1df124f3db677a8ac16045ac4.jpg'),
(5, 'ข้าวผัดกุ้ง', 1, 50, 'https://img.wongnai.com/p/1920x0/2018/02/14/021350fce478468b98c775abd057a3c0.jpg'),
(6, 'ผัดผงกะหรี่ทะเล', 1, 50, 'https://img.wongnai.com/p/1920x0/2016/09/21/e427ea6a1a154ce7bb552fa44d6cc8ec.jpg'),
(7, 'ข้าวมันไก่', 1, 40, 'https://static.thairath.co.th/media/4DQpjUtzLUwmJZZSEmAUm74bI2EL8Sb34rOSLQkKjXQF.jpg'),
(8, 'ข้าวหมูแดง', 1, 45, 'http://s2.smilesmine.com/thimgs/202108/04/12/1628052488991.jpg'),
(9, 'หมูทอดกระเทียม', 1, 45, 'https://chefoldschool.com/wp-content/uploads/2020/08/p86-1024x681.jpg'),
(10, 'ผัดไทย', 1, 50, 'https://s.isanook.com/wo/0/rp/rc/w700h366/yacxacm1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL3dvLzAvdWQvMzcvMTg1MzY5L2Zvb2QuanBn.jpg'),
(11, 'แกงเขียวหวาน', 2, 50, 'https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2022/09/16/f083c309eaab40b8b21efa7eaeda4b87_How_To_Make_Thai_Green_Curry_Like_A_MICHELIN_Starred_Restaurant2.jpg'),
(12, 'แกงส้ม', 2, 70, 'https://www.unileverfoodsolutions.co.th/dam/global-ufs/mcos/SEA/calcmenu/recipes/TH-recipes/soups/%E0%B9%81%E0%B8%81%E0%B8%87%E0%B8%AA%E0%B9%89%E0%B8%A1/%E0%B9%81%E0%B8%81%E0%B8%87%E0%B8%AA%E0%B9%89%E0%B8%A1_header.jpg'),
(13, 'ต้มยำกุ้ง', 2, 80, 'https://s359.kapook.com/pagebuilder/1f12afa5-ed83-4fd6-b9e7-8c670d941668.jpg'),
(14, 'ไข่พะโล้', 2, 50, 'https://img.wongnai.com/p/1920x0/2020/02/13/8a0e9a2390bd4570a053e4934c51e223.jpg\r\n'),
(15, 'น้ำตกหมู', 2, 60, 'https://img.wongnai.com/p/1920x0/2017/09/12/22ae2e86fe464bafa615aa454cd6f9aa.jpg'),
(16, 'ปลาสามรส', 2, 80, 'https://chefoldschool.com/wp-content/uploads/2020/06/p45.jpg'),
(17, 'ปูผัดผงกะหรี่', 2, 120, 'https://d21dsidbdoi5kv.cloudfront.net/wp-content/uploads/2022/04/1-6.jpg'),
(18, 'ผัดเผ็ดปลาดุก', 2, 60, 'https://patternpack.org/wp-content/uploads/2022/08/image-1.png'),
(19, 'ลาบหมู', 2, 50, 'https://www.unileverfoodsolutions.co.th/dam/global-ufs/mcos/SEA/calcmenu/recipes/TH-recipes/red-meats-&-red-meat-dishes/%E0%B8%A5%E0%B8%B2%E0%B8%9A%E0%B8%AB%E0%B8%A1%E0%B8%B9/%E0%B8%A5%E0%B8%B2%E0%B8%9A%E0%B8%AB%E0%B8%A1%E0%B8%B9_header.jpg'),
(20, 'ส้มตำ', 2, 40, 'https://cdn.pixabay.com/photo/2015/04/07/07/51/papaya-salad-710613__480.jpg'),
(21, 'ขนมชั้น', 3, 39, 'https://bakery-lover.com/wp-content/uploads/2021/11/%E0%B8%82%E0%B8%99%E0%B8%A1%E0%B8%8A%E0%B8%B1%E0%B9%89%E0%B8%99.jpg'),
(22, 'ขนมเปียกปูน', 3, 39, 'https://www.pholfoodmafia.com/wp-content/uploads/2018/05/13PuddinginCoconutCreambig.jpg'),
(23, 'ขนมลูกชุบ', 3, 39, 'https://img.wongnai.com/p/1920x0/2018/08/20/3ede96a4333344b5a2dba1215a2c5456.jpg'),
(24, 'ข้าวเหนียวมะม่วง', 3, 39, 'https://images.workpointnews.com/workpointnews/2022/04/19204738/1650376055_55622_1.jpg'),
(25, 'ทองหยอด', 3, 39, 'https://bakery-lover.com/wp-content/uploads/2021/12/unnamed-59.jpg'),
(26, 'ทองหยิบ', 3, 39, 'https://img.wongnai.com/p/1920x0/2022/05/05/0e1ed3a486d14bc8a5cc9317d38a4317.jpg'),
(27, 'บัวลอยไข่หวาน', 3, 39, 'https://img.kapook.com/u/2022/wanwanat/1079595941.jpg'),
(28, 'บิงซูสตอเบอร์รี่', 3, 59, 'https://s3-ap-southeast-1.amazonaws.com/photo.wongnai.com/photos/2015/09/01/1c734d920bf940399a9edb8b1e3428fb.jpg'),
(29, 'ลอดช่อง', 3, 39, 'https://s3.theasianparent.com/cdn-cgi/image/width=700,quality=95/tap-assets-prod/wp-content/uploads/sites/25/2022/04/Lod-Chong-Dessert.jpg'),
(30, 'ไอศกรีมช็อกโกแลต', 3, 39, 'https://krua.co/wp-content/uploads/2021/03/RB0435_Gallery_-02-scaled.jpg'),
(31, 'ไก่ป๊อป', 4, 59, 'https://s3.theasianparent.com/tap-assets-prod/wp-content/uploads/sites/25/2022/03/popcorn-chicken002.jpg'),
(32, 'ขนมโตเกียว', 4, 49, 'http://cdn.mamaexpert.com/files/content/00073/27ce2/conversions/big.jpg'),
(33, 'ชีสบอล', 4, 59, 'https://1.bp.blogspot.com/-4Z7TQiB8FCs/WpuegQSzs1I/AAAAAAAAACs/KXRPoh1ye4kCpliC_kL7esFCF5xV9bSQQCLcBGAs/s1600/foodLarge58_p1.jpg'),
(34, 'ซูชิ', 4, 99, 'http://d20aeo683mqd6t.cloudfront.net/th/articles/title_images/000/038/184/medium/sushi.jpg?2019'),
(35, 'โดนัทปลา', 4, 59, 'https://เมนู.net/media/images/recipe/%E0%B9%82%E0%B8%94%E0%B8%99%E0%B8%B1%E0%B8%97.jpg'),
(36, 'ทาโกยากิ', 4, 59, 'https://img.kapook.com/u/2017/surauch/cooking/n1_9.jpg'),
(37, 'นักเก็ตไก่', 4, 59, 'https://food.mthai.com/app/uploads/2017/08/NUGGET.jpg'),
(38, 'ปาท่องโก๋', 4, 39, 'https://www.coffeefavour.com/wp-content/uploads/2017/02/1.0.jpg'),
(39, 'เฟรนซ์ฟรายส์', 4, 59, 'https://www.siammakro.co.th/imgadmins/img_detail_food/th/125321.jpg'),
(40, 'ลูกชิ้น', 4, 49, 'https://s359.kapook.com/pagebuilder/3ec15280-cb8e-4cd2-aa07-2865c8cb81e4.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `lid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `oid` int(11) NOT NULL,
  `cusid` int(11) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orderamount`
--

CREATE TABLE `orderamount` (
  `oid` int(11) NOT NULL,
  `fid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `statuslogin`
--

CREATE TABLE `statuslogin` (
  `lid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `statuslogin`
--

INSERT INTO `statuslogin` (`lid`, `name`) VALUES
(1, 'Customer'),
(2, 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `statusorder`
--

CREATE TABLE `statusorder` (
  `sid` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `statusorder`
--

INSERT INTO `statusorder` (`sid`, `name`) VALUES
(1, 'กำลังทำอาหาร'),
(2, 'การทำอาหารเสร็จสิ้น'),
(3, 'กำลังจัดส่ง'),
(4, 'จัดส่งเสร็จสิ้น');

-- --------------------------------------------------------

--
-- Table structure for table `type`
--

CREATE TABLE `type` (
  `tid` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `type`
--

INSERT INTO `type` (`tid`, `name`) VALUES
(1, 'อาหารจานเดียว'),
(2, 'กับข้าว'),
(3, 'ของหวาน'),
(4, 'ของทานเล่น');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`aid`);

--
-- Indexes for table `basket`
--
ALTER TABLE `basket`
  ADD PRIMARY KEY (`bid`),
  ADD KEY `cusid` (`cusid`),
  ADD KEY `fid` (`fid`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`cusid`);

--
-- Indexes for table `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`fid`),
  ADD KEY `type` (`type`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`lid`),
  ADD KEY `status` (`status`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`oid`),
  ADD KEY `cusid` (`cusid`),
  ADD KEY `status` (`status`);

--
-- Indexes for table `orderamount`
--
ALTER TABLE `orderamount`
  ADD KEY `fid` (`fid`),
  ADD KEY `oid` (`oid`);

--
-- Indexes for table `statuslogin`
--
ALTER TABLE `statuslogin`
  ADD PRIMARY KEY (`lid`);

--
-- Indexes for table `statusorder`
--
ALTER TABLE `statusorder`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`tid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `basket`
--
ALTER TABLE `basket`
  MODIFY `bid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `cusid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `food`
--
ALTER TABLE `food`
  MODIFY `fid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `lid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `oid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `statuslogin`
--
ALTER TABLE `statuslogin`
  MODIFY `lid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `statusorder`
--
ALTER TABLE `statusorder`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `type`
--
ALTER TABLE `type`
  MODIFY `tid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `basket`
--
ALTER TABLE `basket`
  ADD CONSTRAINT `basket_ibfk_1` FOREIGN KEY (`cusid`) REFERENCES `customer` (`cusid`),
  ADD CONSTRAINT `basket_ibfk_2` FOREIGN KEY (`fid`) REFERENCES `food` (`fid`);

--
-- Constraints for table `food`
--
ALTER TABLE `food`
  ADD CONSTRAINT `food_ibfk_1` FOREIGN KEY (`type`) REFERENCES `type` (`tid`);

--
-- Constraints for table `login`
--
ALTER TABLE `login`
  ADD CONSTRAINT `login_ibfk_1` FOREIGN KEY (`status`) REFERENCES `statuslogin` (`lid`);

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`cusid`) REFERENCES `customer` (`cusid`),
  ADD CONSTRAINT `order_ibfk_2` FOREIGN KEY (`status`) REFERENCES `statusorder` (`sid`);

--
-- Constraints for table `orderamount`
--
ALTER TABLE `orderamount`
  ADD CONSTRAINT `orderamount_ibfk_1` FOREIGN KEY (`fid`) REFERENCES `food` (`fid`),
  ADD CONSTRAINT `orderamount_ibfk_2` FOREIGN KEY (`oid`) REFERENCES `order` (`oid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
