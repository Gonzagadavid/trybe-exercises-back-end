use sakila;
-- ----------------------------------------------------------------------------------------------------
-- operadores
-- Precisamos identificar os dados do cliente com o e-mail LEONARD.SCHOFIELD@sakilacustomer.org . As informações podem ser encontradas na tabela customer
SELECT 
    *
FROM
    customer
WHERE
    email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

-- Precisamos de um relatório dos nomes dos clientes, em ordem alfabética , que não estão mais ativos no nosso sistema e pertencem à loja com o id = 2 , e não inclua o cliente KENNETH no resultado. As informações podem ser encontradas na tabela customer
SELECT 
    *
FROM
    customer
WHERE
    store_id = 2 AND active = 0
        AND first_name <> 'KENNETH'
ORDER BY first_name; 

-- O setor financeiro quer saber título, descrição, ano de lançamento e valor do custo de substituição ( replacement_cost ), dos 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares. Em caso de empate, ordene em ordem alfabética pelo título. As informações podem ser encontradas na tabela film
SELECT 
    title AS 'Titulo',
    description AS 'Descrição',
    replacement_cost AS 'Custo de substituição'
FROM
    film
WHERE
    replacement_cost > 18 AND rating <> 'NC-17'
ORDER BY replacement_cost , title
LIMIT 100;

-- Quantos clientes estão ativos e na loja 1 ? As informações podem ser encontradas na tabela customer
SELECT 
    COUNT(*)
FROM
    customer
WHERE
    store_id = 1 AND active = 1;

-- Mostre todos os detalhes dos clientes que não estão ativos na loja 1 . As informações podem ser encontradas na tabela customer
SELECT 
    *
FROM
    customer
WHERE
    store_id = 1 AND active = 0;

-- Precisamos descobrir quais são os 50 filmes feitos apenas para adultos com a menor taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes. Em caso de empate, ordene em ordem alfabética pelo título. As informações podem ser encontradas na tabela film
SELECT 
    *
FROM
    film
WHERE
    rating = 'NC-17'
ORDER BY rental_rate DESC , title
LIMIT 50;
-- -----------------------------------------------------------------------------------------------------------
-- like

-- Mostre todos os detalhes dos filmes que contêm a palavra ace no nome.
SELECT 
    *
FROM
    film
WHERE
    title LIKE '%ace%';

-- Mostre todos os detalhes dos filmes cujas descrições finalizam com china 
SELECT 
    *
FROM
    film
WHERE
    description LIKE '%china';

-- Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra girl e o título finaliza com a palavra lord .
SELECT 
    *
FROM
    film
WHERE
    description LIKE '% girl %'
        AND title LIKE '%lord'
LIMIT 2;

-- Mostre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra gon .
SELECT 
    *
FROM
    film
WHERE
    title LIKE '___gon%'
LIMIT 2;

-- Mostre o único caso em que, a partir do 4° caractere no título do filme, tem-se a palavra gon e a descrição contém a palavra Documentary .
SELECT 
    *
FROM
    film
WHERE
    title LIKE '%gon%'
        AND description LIKE '%documentary%'
LIMIT 1;

-- Mostre os dois filmes cujos títulos ou finalizam com academy ou iniciam com mosquito .

SELECT 
    *
FROM
    film
WHERE
    title LIKE '%academy'
        OR title LIKE 'mosquito%'
LIMIT 2;

-- Mostre os seis filmes que contêm as palavras monkey e sumo em suas descrições.
SELECT 
    *
FROM
    film
WHERE
    description LIKE '% monkey %'
        OR description LIKE '% sumo %'
LIMIT 6;

-- --------------------------------------------------------------------------------------------------------
-- IN BEWEEN

-- Mostre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: hicks, crawford, henry, boyd, mason, morales e kennedy , ordenados por nome em ordem alfabética.
SELECT 
    first_name AS 'nome',
    last_name AS 'sobrenome',
    email AS 'e-mail'
FROM
    customer
WHERE
    last_name IN ('hicks' , 'crawford',
        'henry',
        'boyd',
        'mason',
        'morales',
        'kennedy')
ORDER BY first_name;

-- Mostre o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176 , ordenados em ordem alfabética.
SELECT 
    email AS 'e-mail'
FROM
    customer
WHERE
    address_id IN ('172' , '173', '174', '175', '176')
ORDER BY email;

-- Descubra quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005 . Lembre-se de que, no banco de dados, as datas estão armazenadas no formato ano/mês/dia , diferente do formato brasileiro, que é dia/mês/ano .
SELECT 
    COUNT(*) AS 'pagamentos entre 01/05/2005 e 01/08/2005 '
FROM
    payment
WHERE
    payment_date BETWEEN '2005-05-01' AND '2005-08-01';
    
-- Mostre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de 3 a 6 . Os resultados devem ser classificados em filmes com maior duração de empréstimo primeiro. Em caso de empate, ordene em ordem alfabética pelo título.
SELECT 
    title AS 'titulo',
    release_year AS 'ano de lançamento',
    rental_duration AS 'duração do emprestimo'
FROM
    film
WHERE
    rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC , title ASC;

-- Monte um relatório que exiba o título e classificação dos 500 primeiros filmes direcionados para as classificações indicativas G, PG e PG-13 . Os resultados devem estar ordenados por título.
SELECT 
    title AS 'titulo', rating AS 'classificação'
FROM
    film
WHERE
    rating IN ('G' , 'PG', 'PG-13')
ORDER BY title;

-- Quantos pagamentos temos com a data de retorno 2005-05-25 ? Há múltiplas maneiras possíveis de encontrar a resposta.
SELECT 
    COUNT(*)
FROM
    payment
WHERE
    DATE(payment_date) = '2005-05-25';

SELECT 
    COUNT(*)
FROM
    payment
WHERE
    payment_date LIKE '2005-05-25%';

-- Quantos pagamentos foram feitos entre 01/07/2005 e 22/08/2005 ?

SELECT 
    COUNT(*) AS 'pagamentos foram feitos entre 01/07/2005 e 22/08/2005'
FROM
    payment
WHERE
    payment_date BETWEEN '2005-07-01' AND '2005-08-22';
    
-- Usando a tabela rental , extraia data, ano, mês, dia, hora, minuto e segundo dos registros com rental_id = 10330. Utilize a coluna rental_date para extrair as informações.
SELECT 
    DATE(rental_date) AS 'data',
    YEAR(rental_date) AS 'ano',
    MONTH(rental_date) AS 'mes',
    DAY(rental_date) AS 'dia',
    HOUR(rental_date) AS 'hora',
    MINUTE(rental_date) AS 'minuto',
    SECOND(rental_date) AS 'segundo'
FROM
    rental
WHERE
    rental_id = 10330;
    
-- Monte uma query que retorne todos os dados do pagamento feito no dia 28/07/2005 a partir das 22 horas .
SELECT 
    *
FROM
    payment
WHERE
    payment_date > '2005-07-28 22:00:00	';