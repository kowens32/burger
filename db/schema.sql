DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE books_db;

CREATE TABLE burgers(
    id INTEGER(100) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(100),
    devoured BOOLEAN DEFAULT false,
    date TIMESTAMP,
    PRIMARY KEY (id)
);
