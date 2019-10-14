
-- DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;
-- DROP TABLE IF EXISTS burgers
CREATE TABLE burgers(id int auto_increment NOT NULL 
,burger_name VARCHAR(255) NULL 
,devoured BOOLEAN DEFAULT false
,PRIMARY KEY (id)
);
