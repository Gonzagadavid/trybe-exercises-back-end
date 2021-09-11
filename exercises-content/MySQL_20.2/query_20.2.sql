-- select

-- Monte uma query que exiba seu nome na tela;
SELECT 'David' as 'nome';

-- Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;
SELECT 'David', 'Gonzaga', 'São José dos Campos-SP' , 30;

-- Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS , que é chamado de alias na linguagem SQL ( alias é como um apelido no português);
SELECT 'David' as 'nome', 'Gonzaga' as 'sobrenome', 'São José dos Campos-SP' as 'cidade natal', 30 as 'idade';

-- Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT ;
SELECT 13 * 8 AS 'resultado';

-- Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual".
SELECT NOW() AS 'data atual';

-- -----------------------------------------------------------------------------------------------------------------
-- concat

use sakila;

-- Na tabela sakila.film , monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome Lançamento do Filme .
select concat(title, ' ', release_year) as 'Lançamento do Filme ' from film;

-- Na tabela sakila.film , crie uma query que exiba o título do filme e sua classificação indicativa (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome Classificação . Não se esqueça de deixar um espaço entre as palavras para que fiquem legíveis.
SELECT 
    CONCAT(title, ' ', rating) AS 'Classificação'
FROM
    film;

-- Na tabela sakila.address , monte uma query que exiba a rua e o distrito de cada registro em uma coluna apenas, e dê a essa coluna o nome Endereço . 
SELECT 
    CONCAT(address, ' ', district) AS 'Endereço'
FROM
    address;
    
-- -----------------------------------------------------------------------------------------------------------------
-- distinct

CREATE DATABASE `Escola`;
CREATE TABLE IF NOT EXISTS Escola.Alunos (
    `Nome` VARCHAR(7) CHARACTER SET utf8,
    `Idade` INT
);
INSERT INTO Escola.Alunos VALUES
    ('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);

use Escola;

-- Monte uma query para encontrar pares únicos de nomes e idades .
SELECT DISTINCT
    *
FROM
    Alunos;

-- Quantas linhas você encontraria na query anterior?
-- 5

-- Monte uma query para encontrar somente os nomes únicos.
SELECT DISTINCT
    Nome
FROM
    Alunos;

-- Quantas linhas você encontraria na query anterior?
-- 4

-- Monte uma query para encontrar somente as idades únicas.
SELECT DISTINCT
    Idade
FROM
    Alunos;

-- Quantas linhas você encontraria na query anterior?
-- 4

-- ---------------------------------------------------------------------------------------------------------------------
-- count

use sakila;

-- Quantas senhas temos cadastradas nessa tabela?
SELECT 
    COUNT(password)
FROM
    staff;

-- Quantas pessoas temos no total trabalhando para nossa empresa?
SELECT 
    COUNT(*)
FROM
    staff;

-- Quantos emails temos cadastrados nessa tabela?
SELECT 
    COUNT(email)
FROM
    staff;
    
-- ------------------------------------------------------------------------------------------------------------------
-- Escreva uma query que exiba todos os filmes cadastrados no banco de dados.
SELECT 
    *
FROM
    film;

-- Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação
SELECT 
    title AS 'Nome',
    release_year AS 'Ano de lançamento',
    rating AS 'Classificação'
FROM
    film;

-- Quantos filmes temos cadastrados?
SELECT 
    COUNT(*)
FROM
    film;

-- Para os exercícios a seguir, vamos usar a tabela sakila.actor
-- Escreva uma query que exiba apenas os sobrenomes únicos cadastrados.
SELECT 
    last_name
FROM
    actor;

-- Quantos sobrenomes únicos temos na tabela?
SELECT DISTINCT
    COUNT(last_name)
FROM
    actor;

-- Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.
SELECT 
    *
FROM
    actor
ORDER BY last_name , first_name DESC;

-- Vá até a tabela language do sakila e crie uma pesquisa que mostre os 5 idiomas cadastrados , 
-- mas não mostre o idioma english .
SELECT 
    *
FROM
    language
LIMIT 5 OFFSET 1
