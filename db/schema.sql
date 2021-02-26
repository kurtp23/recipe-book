DROP DATABASE IF EXISTS recipe_book_db;
CREATE DATABASE recipe_book_db;

USE recipe_book_db;

CREATE TABLE users (
id INT NOT NULL AUTO_INCREMENT,
username VARCHAR(80),
PRIMARY KEY (id)
);

CREATE TABLE recipes (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(200),
details TEXT,
PRIMARY KEY (id)
);

CREATE TABLE ingredients (
id INT NOT NULL AUTO_INCREMENT,
in_name VARCHAR(80),
PRIMARY KEY (id)
);

CREATE TABLE tags (
re_id INT NOT NULL,
in_id INT NOT NULL,
PRIMARY KEY (re_id, in_id),
FOREIGN KEY (re_id) REFERENCES recipes(id),
FOREIGN KEY (in_id) REFERENCES ingredients(id)
);
