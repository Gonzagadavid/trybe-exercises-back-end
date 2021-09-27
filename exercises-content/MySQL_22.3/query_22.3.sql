-- Clone alguma tabela do banco de dados sakila para ver na prática o resultado 
USE sakila;

CREATE TABLE countryCopy LIKE country;

-- ---------------------------------------------------------------------------------------------------------------
-- VIEW

CREATE VIEW top_10_customers AS -- query --->
    SELECT c.customer_id, c.first_name, SUM(p.amount) AS total_amount_spent
    FROM sakila.payment p
    INNER JOIN sakila.customer c ON p.customer_id = c.customer_id
    GROUP BY customer_id
    ORDER BY total_amount_spent DESC
    LIMIT 10;
    
-- ---------------------------------------------------------------------------------------------------------------
-- ALTER TABLE
USE sakila;
CREATE TABLE noticia(
    noticia_id INT PRIMARY KEY,
    titulo VARCHAR(100),
    historia VARCHAR(300)
) engine = InnoDB;

-- Adicionar uma nova coluna
ALTER TABLE noticia ADD COLUMN data_postagem date NOT NULL;

-- Modificar o tipo e propriedades de uma coluna
ALTER TABLE noticia MODIFY noticia_id BIGINT;

-- Adicionar incremento automático a uma coluna
-- (especifique o tipo da coluna + auto_increment)
ALTER TABLE noticia MODIFY noticia_id BIGINT auto_increment;

-- Alterar o tipo e nome de uma coluna
ALTER TABLE noticia CHANGE historia conteudo_postagem VARCHAR(1000) NOT NULL;

-- Dropar/Excluir uma coluna
ALTER TABLE noticia DROP COLUMN data_postagem;

-- Adicionar uma nova coluna após outra
ALTER TABLE noticia ADD COLUMN data_postagem DATETIME NOT NULL AFTER titulo;

-- -----------------------------------------------------------------------------------------------------------------
-- INDEX

CREATE INDEX index_first_name ON sakila.actor(first_name);

SELECT *
FROM sakila.actor
WHERE first_name = 'RITA'; -- 0.35

DROP INDEX index_first_name ON sakila.actor;

SELECT *
FROM sakila.actor
WHERE first_name = 'RITA'; -- 20.25

CREATE FULLTEXT INDEX index_address ON sakila.address(address);

SELECT *
FROM sakila.address
WHERE MATCH(address) AGAINST('drive'); --  0.95

DROP INDEX index_address ON sakila.address;

SELECT *
FROM sakila.address
WHERE address LIKE '%drive%'; -- 65.40


CREATE UNIQUE INDEX unique_name_index ON sakila.language(name);

SELECT *
FROM sakila.language
WHERE name = 'Mandarin'; -- 1.00

DROP INDEX unique_name_index ON sakila.language;

SELECT * FROM sakila.language
WHERE name = 'Mandarin'; -- 2.20