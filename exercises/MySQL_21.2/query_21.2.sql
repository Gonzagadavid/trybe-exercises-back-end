USE Pixar;
SELECT * FROM Movies;
SELECT * FROM BoxOffice;
SELECT * FROM Theater;
-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.
SELECT 
    m.title AS 'filme', b.domestic_sales AS 'vendas nacionais', b.international_sales AS 'vendas internacionais'
FROM
    Movies AS m
        INNER JOIN
    BoxOffice AS b ON m.id = b.movie_id;

-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).
 SELECT 
    m.title AS 'filme', b.domestic_sales, b.international_sales
FROM
    Movies AS m
        INNER JOIN
    BoxOffice AS b ON m.id = b.movie_id 
          WHERE b.international_sales > b.domestic_sales;

-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
SELECT 
    m.title AS 'filme', b.rating AS 'avaliação'
FROM
    Movies AS m
        INNER JOIN
    BoxOffice AS b ON m.id = b.movie_id
ORDER BY avaliação DESC;

-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT 
    c.*, m.*, '-' AS '-'
FROM
    Theater AS c
        LEFT JOIN
    Movies AS m ON c.id = m.theater_id
ORDER BY name;

-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT 
    c.*, m.*, '-' AS '-'
FROM
    Theater AS c
        RIGHT JOIN
    Movies AS m ON c.id = m.theater_id
ORDER BY name;

-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
SELECT 
    m.title AS 'filme', b.rating AS 'avaliação'
FROM
    Movies AS m
        INNER JOIN
    BoxOffice AS b ON m.id = b.movie_id
WHERE
    b.rating > 7.5;


SELECT 
    b.rating,
    (SELECT 
            title
        FROM
            Movies
        WHERE
            id = b.movie_id) AS 'filme'
FROM
    BoxOffice AS b
WHERE
    b.rating > 7.5;
    
USE Pixar;

SELECT 
    title
FROM
    Movies
WHERE
    id IN (SELECT 
            movie_id
        FROM
            BoxOffice
        WHERE
            rating > 7.5);

-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.
SELECT 
    b.rating
FROM
    BoxOffice b
        INNER JOIN
    Movies m ON b.movie_id = m.id
WHERE
    m.year > 2009;

SELECT 
    rating
FROM
    BoxOffice
WHERE
    movie_id IN (SELECT 
            id
        FROM
            Movies
        WHERE
            year > 2009);
            

-- Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.
SELECT 
    name, location
FROM
    Theater AS t
WHERE
    EXISTS( SELECT 
            *
        FROM
            Movies
        WHERE
            Movies.theater_id = t.id);

-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
SELECT 
    name, location
FROM
    Theater AS t
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            Movies
        WHERE
            Movies.theater_id = t.id);
