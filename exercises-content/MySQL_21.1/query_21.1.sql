-- string

-- Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.
SELECT UCASE('trybe');

-- Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?' .
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');

-- Utilizando uma query , encontre quantos caracteres temos em 'Uma frase qualquer' .
SELECT CHAR_LENGTH('Uma frase qualquer');

-- Extraia e retorne a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas' .
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);

-- Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');

-- ----------------------------------------------------------------------------------------------------------------------
-- condicionais

-- Usando o IF na tabela sakila.film , exiba o id do filme , o título e uma coluna extra chamada 'conheço o filme?'
--  , em que deve-se avaliar se o nome do filme é ' ACE GOLDFINGER '. Caso seja, exiba "Já assisti a esse filme".
--  Caso contrário, exiba "Não conheço o filme". Não esqueça de usar um alias para renomear a coluna da condicional.
USE sakila;
SELECT 
    film_id,
    title,
    IF(title = 'ACE GOLDFINGER',
        'Já assisti a esse filme',
        'Não conheço o filme') AS 'conheço o filme?'
FROM
    film;

-- Usando o CASE na tabela sakila.film , exiba o título , a classificação indicativa ( rating ) e uma coluna extra
-- que vamos chamar de 'público-alvo' , em que classificaremos o filme de acordo com as seguintes siglas:
-- G: "Livre para todos";
-- PG: "Não recomendado para menores de 10 anos";
-- PG-13: "Não recomendado para menores de 13 anos";
-- R: "Não recomendado para menores de 17 anos";
-- Se não cair em nenhuma das classificações anteriores: "Proibido para menores de idade".
SELECT 
    title,
    CASE
        WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
        ELSE 'Proibido para menores de idade'
    END AS 'público-alvo'
FROM
    film;
    
-- -------------------------------------------------------------------------------------------------------------------------------------------------------
-- funções matemáticas

-- Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar. Chame essa coluna de 'Par ou Ímpar' ,
--  onde ela pode dizer 'Par' ou 'Ímpar'.
SELECT IF(15 MOD 2 = 0, 'par', 'ímpar'); 

-- Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de 12 pessoas podemos levar ao cinema sem que ninguém
-- fique de fora?
SELECT 220 DIV 12;

-- Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando? Se sim, quantos?
SELECT 220 MOD 12;

-- Monte uma query que gere um valor entre 15 e 20 .
SELECT ROUND(15 + RAND() * 5);

-- Monte uma query que exiba o valor arredondado de 15.7515971 com uma precisão de 5 casas decimais.
SELECT ROUND(15.7515971, 5);

-- Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?
SELECT FLOOR(39.494);

-- Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para 
-- cima dessa média?
SELECT CEIL(85.234);

-- --------------------------------------------------------------------------------------------------------------------
-- datas

-- Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.
SELECT DATEDIFF('2030-01-20', CURRENT_DATE());

-- Monte uma query exiba a diferença de horas entre '10:25:45' e '11:00:00' .
SELECT TIMEDIFF('11:00:00', '10:25:45');

-- --------------------------------------------------------------------------------------------------------------------
-- funções de agragaçãoptimize
-- Monte um query que exiba:
-- A média de duração dos filmes e dê o nome da coluna de 'Média de Duração';
-- A duração mínima dos filmes como 'Duração Mínima';
-- A duração máxima dos filmes como 'Duração Máxima';
-- A soma de todas as durações como 'Tempo de Exibição Total';
-- E finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.
SELECT * FROM film;
SELECT 
  AVG(length) as 'Média de Duração', 
  MIN(length) as 'Duração Mínima',
  MAX(length) as 'Duração Máxima',
  SUM(length) as 'Tempo de Exibição Total',
  COUNT(length) as 'Filmes Registrados'
    FROM film;

-- --------------------------------------------------------------------------------------------------------------------
-- group by

-- Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e 
-- a quantidade que estão inativos.
SELECT 
    COUNT(*)
FROM
    customer
GROUP BY active;

-- Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja.
-- Os resultados devem conter o ID da loja , o status dos clientes (ativos ou inativos) e a quantidade de clientes
-- por status .
SELECT 
    active, store_id, COUNT(*)
FROM
    customer
GROUP BY active , store_id;

-- Monte uma query que exiba a média de duração de locação por classificação indicativa ( rating ) dos filmes
-- cadastrados na tabela sakila.film . Os resultados devem ser agrupados pela classificação indicativa e ordenados
-- da maior média para a menor.
SELECT 
    rating, AVG(rental_duration)
FROM
    film
GROUP BY rating
ORDER BY AVG(rental_duration);

-- Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços
-- registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.
SELECT 
    district, COUNT(*)
FROM
    address
GROUP BY district
ORDER BY COUNT(*) DESC;

-- --------------------------------------------------------------------------------------------------------------
-- having

-- Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, 
-- dê um alias (apelido) à coluna gerada por AVG(length) , de forma que deixe a query mais legível. Finalize
-- ordenando os resultados de forma decrescente.
SELECT 
    rating, AVG(length) AS average_length
FROM
    sakila.film
GROUP BY rating
HAVING average_length > 115
    AND average_length < 121.5
ORDER BY average_length DESC;
    
-- Usando a query a seguir, exiba apenas os valores de custo de substituição que estão acima de $3950.50. 
-- Dê um alias que faça sentido para SUM(replacement_cost) , de forma que deixe a query mais legível.
--  Finalize ordenando os resultados de forma crescente.

    SELECT 
    rating, SUM(replacement_cost) AS total_replace_cost
FROM
    sakila.film
GROUP BY rating
HAVING total_replace_cost > 3950.50
ORDER BY total_replace_cost;
