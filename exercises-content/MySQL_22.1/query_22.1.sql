CREATE DATABASE IF NOT EXISTS albuns;

USE albuns;

CREATE TABLE artista (
    artista_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
)  ENGINE=INNODB;

CREATE TABLE estilo (
    estilo_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
)  ENGINE=INNODB;

CREATE TABLE album (
    album_id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(50),
    artista_id INT NOT NULL,
    estilo_id INT NOT NULL,
    FOREIGN KEY (artista_id)
        REFERENCES artista (artista_id),
    FOREIGN KEY (estilo_id)
        REFERENCES estilo (estilo_id)
)  ENGINE=INNODB;
