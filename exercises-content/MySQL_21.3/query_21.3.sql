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

-- -----------------------------------------------------------------------------------------------------------------------------------
-- Stored Functions

-- Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id .
USE sakila;

DELIMITER $$

CREATE FUNCTION totalPaymentByCustomerId(id INT)
RETURNS INT READS SQL DATA
BEGIN
  DECLARE totalPayment INT;
SELECT 
    COUNT(customer_id)
FROM
    payment
WHERE
    customer_id = id INTO totalPayment;
  RETURN totalPayment;
END $$

DELIMITER ;

SELECT totalPaymentByCustomerId(2);

-- Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id.
DELIMITER $$

CREATE FUNCTION getFilmeNameByInventoryId(id INT)
RETURNS VARCHAR(50) READS SQL DATA
BEGIN
  DECLARE filmeName VARCHAR(50);
SELECT 
    f.title
FROM
    film AS f
        INNER JOIN
    inventory AS i ON i.film_id = f.film_id
WHERE
    i.inventory_id = id INTO filmeName;
  RETURN filmeName;
END $$

DELIMITER ;

SELECT getFilmeNameByInventoryId(14);

-- Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.
SELECT * FROM category;
SELECT * FROM film_category;
DELIMITER $$

CREATE FUNCTION getQuantityCategoryFilms(categoryName VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
  DECLARE filmQty INT;
SELECT 
    count(f.film_id)
FROM
    film_category AS f
        INNER JOIN
    category AS c ON c.category_id = f.category_id
WHERE
    c.name = categoryName INTO filmQty;
  RETURN filmQty;
END $$

DELIMITER ;

SELECT getQuantityCategoryFilms('Action');

-- -----------------------------------------------------------------------------------------------------------------------------------
-- Triggers

CREATE TABLE carros(
    id_carro INT PRIMARY KEY auto_increment,
    preco DECIMAL(12, 2) NOT NULL DEFAULT 0,
    data_atualizacao DATETIME,
    acao VARCHAR(15),
    disponivel_em_estoque BOOLEAN DEFAULT 0
) engine = InnoDB;

CREATE TABLE log_operacoes(
    operacao_id INT AUTO_INCREMENT PRIMARY KEY,
    tipo_operacao VARCHAR(15) NOT NULL,
    data_ocorrido DATE NOT NULL
) engine = InnoDB;

USE betrybe_automoveis;

-- Crie um TRIGGER que, a cada nova inserção feita na tabela carros , defina o valor da coluna data_atualizacao para o momento do ocorrido, a acao para 'INSERÇÃO' e a coluna disponivel_em_estoque para 1 .
DELIMITER $$

CREATE TRIGGER insertCars
BEFORE INSERT ON carros
FOR EACH ROW
BEGIN
     SET NEW.acao = 'INSERÇÃO', NEW.disponivel_em_estoque = 1;
END $$

DELIMITER ;

INSERT INTO carros (preco, data_atualizacao) VALUES ( 10000.00, now()); 

SELECT 
    *
FROM
    carros;

-- Crie um TRIGGER que, a cada atualização feita na tabela carros , defina o valor da coluna data_atualizacao para o momento do ocorrido e a acao para 'ATUALIZAÇÃO'.

DELIMITER $$

CREATE TRIGGER updateCars
BEFORE UPDATE ON carros
FOR EACH ROW
BEGIN
     SET NEW.data_atualizacao = now();
END $$

DELIMITER ;

UPDATE carros 
SET 
    preco = 20000.00
WHERE
    id_carro = 1;

SELECT 
    *
FROM
    carros;

-- Crie um TRIGGER que, a cada exclusão feita na tabela carros , envie para a tabela log_operacoes as informações do tipo_operacao como 'EXCLUSÃO' e a data_ocorrido como o momento da operação.
DELIMITER $$

CREATE TRIGGER deleteCars
AFTER DELETE ON carros
FOR EACH ROW
BEGIN
     INSERT INTO log_operacoes(tipo_operacao, data_ocorrido) VALUES ('EXCLUSÃO', now());
END $$

DELIMITER ;

DELETE FROM carros WHERE id_carro = 2;
select * from carros;
select * from log_operacoes;
