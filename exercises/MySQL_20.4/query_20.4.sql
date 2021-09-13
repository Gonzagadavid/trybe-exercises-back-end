DROP SCHEMA IF EXISTS Pixar;
CREATE SCHEMA Pixar;
USE Pixar;

CREATE TABLE Movies (
  id INTEGER auto_increment PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
  director VARCHAR(30) NULL,
  year INT NOT NULL,
  length_minutes INT NOT NULL
);

CREATE TABLE BoxOffice (
  movie_id INTEGER,
  FOREIGN KEY (movie_id) REFERENCES Movies (id),
  rating DECIMAL(2,1) NOT NULL,
  domestic_sales INT NOT NULL,
  international_sales INT NOT NULL
);

INSERT INTO Movies(title, director, year, length_minutes)
  VALUES ('Toy Story', 'John Lasseter', 1995, 81),
         ('Vida de inseto', 'Andrew Staton', 1998, 95),
         ('ratatui', 'Brad Bird', 2010, 115),
         ('UP', 'Pete Docter', 2009, 101),
         ('Carros', 'John Lasseter', 2006, 117),
         ('Toy Story 2', 'John Lasseter', 1999, 93),
         ('Valente', 'Brenda Chapman', 2012, 98);


INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
  VALUES (1, 8.3, 190000000, 170000000),
         (2, 7.2, 160000000, 200600000),
         (3, 7.9, 245000000, 239000000),
         (4, 6.1, 330000000, 540000000),
         (5, 7.8, 140000000, 310000000),
         (6, 5.8, 540000000, 600000000),
         (7, 7.5, 250000000, 190000000);
         
USE Pixar;
SHOW TABLES;

-- Exercício 1 : Insira as produções da Pixar abaixo na tabela Movies :
-- Monstros SA, de Pete Docter, lançado em 2001, com 92 minutos de duração.
-- Procurando Nemo, de John Lasseter, lançado em 2003, com 107 minutos de duração.
-- Os Incríveis, de Brad Bird, lançado em 2004, com 116 minutos de duração.
-- WALL-E, de Pete Docter, lançada em 2008, com 104 minutos de duração.
SELECT * FROM Movies;
INSERT INTO Movies (title, director, year, length_minutes) VALUES
  ('Monstros SA', 'Pete Docter', 2001, 92),
  ('Procurando Nemo', 'John Lasseter', 2003, 107 ),
  ('Os Incríveis', 'Brad Bird', 2004, 116),
  ('WALL-E', 'Pete Docter', 2008, 104);

-- Exercício 2 : Procurando Nemo foi aclamado pela crítica! Foi classificado em 6.8, fez 450 milhões no mercado 
-- interno e 370 milhões no mercado internacional. Adicione as informações à tabela BoxOffice.
SELECT * FROM BoxOffice;
INSERT INTO BoxOffice (movie_id, rating, domestic_sales, international_sales)
  VALUES (
    (SELECT id FROM Movies WHERE title = 'Procurando Nemo'), 
     6.8, 450000000, 370000000
  );

-- Exercício 3 : O diretor do filme "Procurando Nemo" está incorreto, na verdade ele foi dirigido por Andrew Staton.
--  Corrija esse dado utilizando o UPDATE .
SET SQL_SAFE_UPDATES = 0;
UPDATE Movies
  SET director = 'Andrew Staton'
    WHERE title = 'Procurando Nemo';

-- Exercício 4 : O título do filme "Ratatouille" esta escrito de forma incorreta na tabela Movies , além disso,
-- o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o UPDATE .
SELECT * FROM Movies;
UPDATE Movies
  SET title = 'Ratatouille'
    WHERE title = 'ratatui';

-- Exercício 5 : Insira as novas classificações abaixo na tabela BoxOffice , lembre-se que a coluna movie_id é uma
--  foreign key referente a coluna id da tabela Movies :
-- Monsters SA, classificado em 8.5, lucrou 300 milhões no mercado interno e 250 milhões no mercado internacional.
-- Os Incríveis, classificado em 7.4, lucrou 460 milhões no mercado interno e 510 milhões no mercado internacional.
-- WALL-E, classificado em 9.9, lucrou 290 milhões no mercado interno e 280 milhões no mercado internacional.
INSERT INTO BoxOffice (movie_id, rating, domestic_sales, international_sales)
  VALUES (
    (SELECT id FROM Movies WHERE title = 'Monsters SA'), 
     8.5, 300000000, 250000000
  ),
  (
    (SELECT id FROM Movies WHERE title = 'Os Incríveis'), 
     7.4, 460000000, 510000000
  ),
  (
    (SELECT id FROM Movies WHERE title = 'WALL-E'), 
     9.9, 290000000, 280000000
  );

UPDATE BoxOffice
  SET movie_id = (SELECT id FROM Movies WHERE title = 'Monstros SA')
    WHERE  rating = 8.5 AND domestic_sales = 300000000 AND 250000000;

-- Exercício 6 : Exclua da tabela Movies o filme "WALL-E".
DELETE FROM BoxOffice WHERE movie_id = (SELECT id FROM Movies WHERE title = 'WALL-E');

DELETE FROM Movies WHERE title = 'WALL-E';

-- Exercício 7 : Exclua da tabela Movies todos os filmes dirigidos por "Andrew Staton".
DELETE FROM BoxOffice WHERE movie_id = (SELECT id FROM Movies WHERE director = 'Andrew Staton' LIMIT 1);
DELETE FROM BoxOffice WHERE movie_id = (SELECT id FROM Movies WHERE director = 'Andrew Staton' ORDER BY id DESC LIMIT 1);
DELETE FROM Movies WHERE director = 'Andrew Staton';