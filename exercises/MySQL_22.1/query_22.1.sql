-- Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. As informações a serem armazenadas sobre cada animal são:
-- Nome;
-- Espécie;
-- Sexo;
-- Idade;
-- Localização.
-- Cada animal também possui vários cuidadores, e cada cuidador pode ser responsável por mais de um animal. Além disso, cada cuidador possui um gerente, sendo que cada gerente pode ser responsável por mais de um cuidador.
-- Siga os passos aprendidos no dia de hoje para modelar essa base de dados.

CREATE DATABASE IF NOT EXISTS Zoo;

USE Zoo;

CREATE TABLE Localizacao (
    localizacao_id INT NOT NULL AUTO_INCREMENT,
    ponto_cardeal VARCHAR(50) NOT NULL,
    PRIMARY KEY (localizacao_id)
)  ENGINE=INNODB;

CREATE TABLE Especie (
    especie_id INT NOT NULL AUTO_INCREMENT,
    nome_especie VARCHAR(100) NOT NULL,
    localizacao_id INT NOT NULL,
    PRIMARY KEY (especie_id),
    FOREIGN KEY (localizacao_id)
        REFERENCES Localizacao (localizacao_id)
)  ENGINE=INNODB;

CREATE TABLE Animal (
    animal_id INT AUTO_INCREMENT NOT NULL,
    nome_anima VARCHAR(100) NOT NULL,
    sexo VARCHAR(20) NOT NULL,
    idade INT,
    especie_id INT NOT NULL,
    PRIMARY KEY (animal_id),
    FOREIGN KEY (especie_id)
        REFERENCES Especie (especie_id)
)  ENGINE=INNODB;

CREATE TABLE Gerente (
    gerente_id INT AUTO_INCREMENT NOT NULL,
    nome_gerente VARCHAR(50) NOT NULL,
    PRIMARY KEY (gerente_id)
)  ENGINE=INNODB;

CREATE TABLE Cuidador (
    cuidador_id INT AUTO_INCREMENT NOT NULL,
    nome_cuidador VARCHAR(50) NOT NULL,
    PRIMARY KEY (cuidador_id),
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id)
        REFERENCES Gerente (gerente_id)
)  ENGINE=INNODB;

CREATE TABLE Cudador_id (
    cuidador_id INT NOT NULL,
    animal_id INT NOT NULL,
    date_start DATETIME,
    horario_inicial TIME,
    horario_final TIME,
    FOREIGN KEY (cuidador_id)
        REFERENCES Cuidador (cuidador_id),
    FOREIGN KEY (animal_id)
        REFERENCES Animal (animal_id)
)  ENGINE=INNODB
