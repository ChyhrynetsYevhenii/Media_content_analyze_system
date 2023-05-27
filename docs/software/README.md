# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення та початкового наповнення бази даних

```sql
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`user` ;

CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` INT NOT NULL,
  `login` TEXT NOT NULL,
  `email` TEXT BINARY NOT NULL,
  `password` TEXT NOT NULL,
  `role` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`filters`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`filters` ;

CREATE TABLE IF NOT EXISTS `mydb`.`filters` (
  `id` INT NOT NULL,
  `date_to` DATE NOT NULL,
  `date_from` DATE NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`request`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`request` ;

CREATE TABLE IF NOT EXISTS `mydb`.`request` (
  `id` INT NOT NULL,
  `title` TEXT NOT NULL,
  `text` TEXT NOT NULL,
  `date` DATE NOT NULL,
  `description` TEXT NOT NULL,
  `filters_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_request_filters1_idx` (`filters_id` ASC) VISIBLE,
  CONSTRAINT `fk_request_filters1`
    FOREIGN KEY (`filters_id`)
    REFERENCES `mydb`.`filters` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`sorse`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`sorse` ;

CREATE TABLE IF NOT EXISTS `mydb`.`sorse` (
  `id` INT NOT NULL,
  `url` TEXT NOT NULL,
  `request_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Media_Request1_idx` (`request_id` ASC) VISIBLE,
  CONSTRAINT `fk_Media_Request1`
    FOREIGN KEY (`request_id`)
    REFERENCES `mydb`.`request` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`support`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`support` ;

CREATE TABLE IF NOT EXISTS `mydb`.`support` (
  `id` INT NOT NULL,
  `title` TEXT NOT NULL,
  `description` TEXT NOT NULL,
  `request_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Support_Request1_idx` (`request_id` ASC) VISIBLE,
  CONSTRAINT `fk_Support_Request1`
    FOREIGN KEY (`request_id`)
    REFERENCES `mydb`.`request` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`role` ;

CREATE TABLE IF NOT EXISTS `mydb`.`role` (
  `id` INT NOT NULL,
  `name` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`access`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`access` ;

CREATE TABLE IF NOT EXISTS `mydb`.`access` (
  `id` INT NOT NULL,
  `role` TEXT NOT NULL,
  `user_id` INT NOT NULL,
  `role_id` INT NOT NULL,
  `request_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_access_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_access_role1_idx` (`role_id` ASC) VISIBLE,
  INDEX `fk_access_request1_idx` (`request_id` ASC) VISIBLE,
  CONSTRAINT `fk_access_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_access_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `mydb`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_access_request1`
    FOREIGN KEY (`request_id`)
    REFERENCES `mydb`.`request` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;



-- -----------------------------------------------------
-- Data for table `mydb`.`user`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`user` (`id`, `name`, `login`, `password`, `email`, `role`) VALUES (DEFAULT, 'John', 'JohnRoth', 'passw123', 'j@email.com', 'public');
INSERT INTO `mydb`.`user` (`id`, `name`, `login`, `password`, `email`, `role`) VALUES (DEFAULT, 'Kate', 'KateDotson', 'passw124', 'k@email.com', 'public');

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`request`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`request` (`id`, `title`, `description`, `date`, `filter_id`) VALUES (DEFAULT, 'Text search query ', 'breaking news around the world', '2022-12-02', NULL);
INSERT INTO `mydb`.`request` (`id`, `title`, `description`, `date`, `filter_id`) VALUES (DEFAULT, 'Photo search query', 'find similar images', '2022-11-20', NULL);

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`source`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`source` (`id`, `url`, `request_id`) VALUES (DEFAULT, 'https://www.nytimes.com/', NULL);
INSERT INTO `mydb`.`source` (`id`, `url`, `request_id`) VALUES (DEFAULT, 'https://images.google.com/', NULL);

COMMIT;
```

## RESTfull сервіс для управління даними

### Головний файл, з якого відбувається запуск сервера

```js
const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./connection');
const router = require('./router');

const app = express();
const port = 8080;

connection.connect();

app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
  console.log(`Сервер запущено на локальному хості: ${port}`);
});
```

### Модуль підключення до бази даних

```js
const mysql = require('mysql3');

const connectionUrl = 'mysql://root:kostia@localhost:8080/DB';
const connection = mysql.createConnection({
  uri: connectionUrl
});

module.exports = connection;
```

### Модуль з реалізацією REST API до таблиці Source

```js
const express = require('express');
const connection = require('./connection');
const router = express.Router();

function handle_error(res, error, message) {
  if (error) {
    res.status(500);
    console.log(error);
    res.send('Щось пішло не так.');
  }
  else if (message) {
    res.send(message);
  }
}

router.post('/source', (req, res) => {
  const { url, request_id } = req.body;
  
  if(!(url && request_id)) {
    res.status(400);
    res.send('Якесь з полів не заповнене: url або request_id');
    return;
  }
  
  connection.query(
    `INSERT INTO source (id, url, request_id) 
    VALUES (DEFAULT, '${url}', ${request_id})`,
  (error) => handle_error(res, error, 'Запис був доданий'));
});
  
router.post('/source/:id', (req, res) => {
  const id = req.params.id;
  const { url, request_id } = req.body;
  
  if(!(url && request_id)) {
    res.status(400);
    res.send('Поле порожнє');
    return;
  } 
  
  connection.query(
    `INSERT INTO source (id, url, request_id) 
    VALUES (${id}, '${url}', ${request_id})`,
    (error) => handle_error(res, error, 'Запис був доданий'));
});
  
router.get('/sources', (req, res) => {
  connection.query('SELECT * FROM source', 
  (error, result) => handle_error(res, error, result));
});
  
router.get('/source/:id', (req, res) => {
  const id = req.params.id;
  connection.query(`SELECT * FROM source WHERE id = ${id}`,
  (error, result) => handle_error(res, error, result));
});
  
router.put('/source/:id', (req, res) => {
  const id = req.params.id;
  
  connection.query(`SELECT * FROM source WHERE id = ${id}`,
  (error, [result]) => {
    if (!result) {
      res.status(404);
      res.send("Запис не знайдено");
      return;
    }

    if (error) {
      res.status(500);
      console.log(result);
      console.log(error);
      res.send('Щось пішло не так');
      return;
    }
    const { url, request_id } = { ...result, ...req.body};
    connection.query(
      `UPDATE source 
      SET url = '${url}', 
      request_id = ${request_id} 
      WHERE id = ${id}`,
    (error) => handle_error(res, error, 'Запис був оновлений'));
  });
});
  
router.delete('/source/:id', (req, res) => {
  const id = req.params.id;
  connection.query(`DELETE FROM source WHERE id = ${id}`,
  (error) => handle_error(res, error, 'Запис було видалено'));
});

module.exports = router;
```