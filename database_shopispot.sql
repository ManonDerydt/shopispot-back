-- MySQL Script generated by MySQL Workbench
-- lun. 21 nov. 2022 18:33:37
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`table1`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`table1` ;

CREATE TABLE IF NOT EXISTS `mydb`.`table1` (
)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Users` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `lastname` VARCHAR(255) NOT NULL,
  `firstname` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(255) NOT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`));


-- -----------------------------------------------------
-- Table `mydb`.`Stores`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Stores` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Stores` (
  `store_id` INT NOT NULL AUTO_INCREMENT,
  `city` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `district` VARCHAR(45) NULL,
  `category` VARCHAR(45) NULL,
  `sub_category` VARCHAR(45) NULL,
  `image_1` VARCHAR(45) NULL,
  `image_2` VARCHAR(45) NULL,
  `image_3` VARCHAR(45) NULL,
  `tag_1` VARCHAR(45) NULL,
  `tag_2` VARCHAR(45) NULL,
  `tag_3` VARCHAR(45) NULL,
  `adress` VARCHAR(45) NULL,
  `number` VARCHAR(45) NULL,
  `schedule` VARCHAR(45) NULL,
  `informations` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  `price_range` VARCHAR(45) NULL,
  PRIMARY KEY (`store_id`));


-- -----------------------------------------------------
-- Table `mydb`.`Users_has_stores`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Users_has_stores` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Users_has_stores` (
  `Stores_store_id` INT NOT NULL,
  `Stores_user_id` INT NOT NULL,
  PRIMARY KEY (`Stores_store_id`, `Stores_user_id`),
  INDEX `fk_Stores_has_Stores_Stores1_idx` (`Stores_user_id` ASC) VISIBLE,
  INDEX `fk_Stores_has_Stores_Stores_idx` (`Stores_store_id` ASC) VISIBLE,
  CONSTRAINT `fk_Stores_has_Stores_Stores`
    FOREIGN KEY (`Stores_store_id`)
    REFERENCES `mydb`.`Stores` (`store_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Stores_has_Stores_Stores1`
    FOREIGN KEY (`Stores_user_id`)
    REFERENCES `mydb`.`Users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;