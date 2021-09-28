-- Desafios sobre VIEW
USE sakila;

-- Crie uma view chamada film_with_categories utilizando as tabelas category , film_category e film do banco de dados sakila . Essa view deve exibir o título do filme, o id da categoria e o nome da categoria. Os resultados devem ser ordenados pelo título do filme.
CREATE VIEW film_with_categories AS
    SELECT 
        f.title, fc.category_id, c.name
    FROM
        film_category AS fc
            JOIN
        film AS f ON f.film_id = fc.film_id
            JOIN
        category AS c ON c.category_id = fc.category_id
    ORDER BY f.title;
      
SELECT 
    *
FROM
    film_with_categories;

-- Crie uma view chamada film_info utilizando as tabelas actor , film_actor e film do banco de dados sakila . Sua view deve exibir o actor_id , o nome completo do ator ou da atriz em uma coluna com o ALIAS actor e o título dos filmes. Os resultados devem ser ordenados pelos nomes de atores e atrizes.
CREATE VIEW film_info AS
    SELECT 
        a.actor_id,
        CONCAT(a.first_name, ' ', a.last_name) AS actor,
        f.title
    FROM
        actor AS a
            JOIN
        film_actor AS fa ON fa.actor_id = a.actor_id
            JOIN
        film AS f ON f.film_id = fa.film_id
    ORDER BY actor;

SELECT * FROM film_info;

-- Crie uma view chamada address_info que faça uso das tabelas address e city do banco de dados sakila . Sua view deve exibir o address_id , o address , o district , o city_id e a city . Os resultados devem ser ordenados pelo nome das cidades.
CREATE VIEW address_info AS
    SELECT 
        a.address_id, a.address, a.district, c.city_id, c.city
    FROM
        address AS a
            JOIN
        city AS c ON c.city_id = a.city_id
    ORDER BY c.city;
    
SELECT 
    *
FROM
    address_info;

-- Crie uma view chamada movies_languages , usando as tabelas film e language do banco de dados sakila . Sua view deve exibir o título do filme , o id do idioma e o idioma do filme.
CREATE VIEW movies_languages AS
    SELECT 
        f.title, l.language_id, l.name AS language
    FROM
        film AS f
            JOIN
        language AS l ON l.language_id = f.language_id
    ORDER BY f.title;

SELECT 
    *
FROM
    movies_languages;