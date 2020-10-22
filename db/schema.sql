CREATE DATABASE burgers_bd;
USE burgers_db;

CREATE TABLE burgers_bd
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100),
    devoured BOOLEAN,
    PRIMARY KEY(id)
);