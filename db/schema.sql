CREATE DATABASE sqlburgers_db;

USE sqlburgers_db;

CREATE TABLE burgers (
	id INTEGER NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(100) NOT NULL,
	devoured BOOLEAN NOT NULL default 0,
	createdAt TIMESTAMP,
	updatedAt TIMESTAMP
	PRIMARY KEY (id)
);