-- Stored Procedures

-- Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.
USE sakila;
DELIMITER //

CREATE PROCEDURE topDezActors()
BEGIN
  SELECT 
    actor_id, COUNT(film_id) AS quantidade_filme
FROM
    film_actor
GROUP BY actor_id
ORDER BY quantidade_filme DESC
LIMIT 10;
END //

DELIMITER ;

CALL topDezActors();

-- Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.
DELIMITER //

CREATE PROCEDURE filmByCategory(IN categoryName VARCHAR(20))
BEGIN

SELECT 
    fc.film_id,
    fc.category_id,
    (SELECT 
            name
        FROM
            category
        WHERE
            category_id = fc.category_id) as category_name,
    (SELECT 
            title
        FROM
            film
        WHERE
            film_id = fc.film_id) as title_film
FROM
    film_category AS fc
WHERE
    fc.category_id IN (SELECT 
            category_id
        FROM
            category
        WHERE
            name = categoryName); -- Query cost 12.26

END //

DELIMITER ;

CALL filmByCategory('Action');

SELECT 
    f.film_id, f.title, fc.category_id, c.name
FROM
    film AS f
        INNER JOIN
    film_category AS fc ON fc.film_id = f.film_id
        INNER JOIN
    category AS c ON c.category_id = fc.category_id
WHERE
    c.name = 'Horror';  -- Query cost 47.26
    
-- Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.
DELIMITER //

CREATE PROCEDURE getCustomerByEmail(IN emailCustomer VARCHAR(100))
BEGIN

SELECT 
    IF((SELECT 
                active
            FROM
                customer
            WHERE
                email = emailCustomer) = 1,
        'ativo',
        'não ativo') as status;

END //

DELIMITER ;

CALL getCustomerByEmail('SANDRA.MARTIN@sakilacustomer.org');