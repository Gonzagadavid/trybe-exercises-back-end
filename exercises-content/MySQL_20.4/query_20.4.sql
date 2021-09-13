USE sakila;
-- -----------------------------------------------------------------------------------------------------------------
-- INSERT
INSERT INTO actor (first_name, last_name)  
    VALUES ('Amácio', 'Mazzaropi');
  
SELECT 
    *
FROM
    actor;	

INSERT INTO sakila.actor (first_name, last_name)
    SELECT first_name, last_name FROM sakila.staff;

-- Insira um novo funcionário na tabela sakila.staff .
-- Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione 
-- "Table Inspector". Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar. 
-- Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa explorada!

INSERT INTO staff (active, address_id, email, first_name, last_name, store_id, username) 
  VALUES (1, 1, 'Knuth@server.com','Donald', 'Knuth', 2, 'Knuth');

-- Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query .
INSERT INTO staff (active, address_id, email, first_name, last_name, store_id, username) 
  VALUES (1, 3, 'aranha@server.com','Anderson', 'Silva', 2, 'Aranha'),
    (1, 1, 'chapeu_palha@server.com','João', 'Luff', 2, 'Chapeu de palha');

-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e 
-- cadastre essas pessoas como atores na tabela sakila.actor.
INSERT INTO actor (first_name, last_name) 
  SELECT first_name, last_name 
    FROM customer LIMIT 5;

-- Cadastre três categorias de uma vez só na tabela sakila.category .
INSERT INTO category (name) 
   VALUES ('SPORT'),
     ('PROGRAMMING'),
       ('STYLE');
  

-- Cadastre uma nova loja na tabela sakila.store .
INSERT INTO store (manager_staff_id, address_id) 
  VALUES(3, 1);
  
-- -------------------------------------------------------------------------------------------------------------------
-- UPDATE
SET SQL_SAFE_UPDATES = 0;

-- Atualize o primeiro nome de todas as pessoas da tabela sakila.actor que possuem o primeiro nome "JULIA" para "JULES".
SELECT * FROM actor;
UPDATE actor 
  SET  first_name = 'JULES'
    WHERE first_name = 'JULIA';
    
-- Foi exigido que a categoria "Sci-Fi" seja alterada para "Science Fiction".
SELECT * FROM category;
UPDATE category
  SET name = 'Science Fiction'
    WHERE name = 'Sci-Fi';

-- Atualize o valor do aluguel para $25 de todos os filmes com duração maior que 100 minutos e que possuem a
-- classificações "G" , "PG" ou "PG-13" e um custo de substituição maior que $20.
SELECT * FROM film;
UPDATE  film 
  SET rental_rate = 25
    WHERE length > 100 AND (rating = 'G' OR rating = 'PG' OR rating = 'PG-13') AND replacement_cost > 20;

-- Foi determinado pelo setor financeiro que haverá um reajuste em todos os preços dos filmes, com base em sua duração. 
-- Para todos os filmes com duração entre 0 e 100, o valor do aluguel passará a ser $10,00, e o aluguel dos filmes com
-- duração acima de 100 passará a ser de $20,00.
SELECT * FROM film;
UPDATE film
  SET rental_rate = (
    CASE WHEN length <= 100 THEN 10
                ELSE 20
	END);
    
-- --------------------------------------------------------------------------------------------------------------------
-- DELETE

-- Exclua do banco de dados o ator com o nome de "KARL".
SELECT * FROM film_actor;
DELETE FROM film_actor
  WHERE actor_id = 12;
  
SELECT * FROM actor;
DELETE from actor 
  WHERE first_name = 'KARL';

-- Exclua do banco de dados os atores com o nome de "MATTHEW".
SELECT * from actor
  WHERE first_name = 'MATTHEW';
DELETE FROM film_actor
  WHERE actor_id IN (8, 103, 181);
  
DELETE FROM actor
  WHERE first_name = 'MATTHEW';
  
-- Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.
DELETE FROM film_text
  WHERE description LIKE '% saga %';
  
-- Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category .
TRUNCATE sakila.film_actor;
SELECT * FROM film_actor;

TRUNCATE sakila.film_category;
SELECT * FROM film_actor;

-- Inspecione todas as tabelas do banco de dados sakila e analise quais restrições ON DELETE foram impostas em cada uma.
-- Use o Table Inspector para fazer isso (aba DDL).

-- Exclua o banco de dados e o recrie (use as instruções no início desta aula).alter
DROP DATABASE sakila;