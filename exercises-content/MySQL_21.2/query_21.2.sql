-- inner join

USE sakila;
-- Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor .
SELECT 
    actor.actor_id, actor.first_name, film_actor.film_id
FROM
    actor
        INNER JOIN
    film_actor ON actor.actor_id = film_actor.actor_id;

-- Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address .
SELECT * FROM address;
SELECT * FROM staff;
SELECT 
    staff.first_name, staff.last_name, address.address
FROM
    staff
        INNER JOIN
    address ON staff.address_id = address.address_id;

-- Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address .
SELECT 
    customer.customer_id,
    customer.first_name,
    customer.email,
    address.address_id,
    address.address
FROM
    customer
        INNER JOIN
    address ON customer.address_id = address.address_id
ORDER BY first_name DESC
LIMIT 10;

-- Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer .
SELECT 
    customer.first_name,
    customer.email,
    customer.address_id,
    address.address,
    address.district
FROM
    customer
        INNER JOIN
    address
WHERE
    district = 'California'
        AND first_name LIKE '%rene%';

-- Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer.
SELECT 
    customer.first_name, COUNT(customer.address_id)
FROM
    customer
        INNER JOIN
    address ON address.address_id = customer.address_id
WHERE
    customer.active = 1
GROUP BY customer.first_name
ORDER BY first_name DESC;

-- Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) paga aos funcionários no ano de 2006. Use as tabelas payment e staff . Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT 
    staff.first_name,
    staff.last_name,
    ROUND(AVG(payment.amount), 2) as 'average payment 2006'
FROM
    staff
        INNER JOIN
    payment
WHERE
    payment.payment_date LIKE '2006%'
GROUP BY staff.first_name , staff.last_name; 

-- Monte uma query que exiba o id do ator , nome , id do filme e título do filme , usando as tabelas actor , film_actor e film . Dica: você precisará fazer mais de um JOIN na mesma query .
SELECT 
    a.actor_id, a.first_name, af.film_id, f.title
FROM
    actor AS a
        INNER JOIN
    film_actor AS af ON a.actor_id = af.actor_id
        INNER JOIN
    film AS f ON af.film_id = f.film_id;

-- -------------------------------------------------------------------------------------------------------------------
-- self join

-- Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição.
SELECT 
    t1.film_id,
    t1.replacement_cost,
    t2.film_id,
    t2.replacement_cost
FROM
    film AS t1,
    film AS t2
WHERE
    t1.replacement_cost = t2.replacement_cost;

-- Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração. Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.
SELECT 
    t1.title, t1.rental_duration, t2.title, t2.rental_duration
FROM
    film AS t1,
    film AS t2
WHERE
    t1.rental_duration = t2.rental_duration;
    
-- Todos os funcionários foram promovidos a atores. Monte uma query que exiba a união da tabela staff com a tabela actor , exibindo apenas o nome e o sobrenome . Seu resultado não deve excluir nenhum funcionário ao unir as tabelas.
SELECT first_name, last_name FROM customer
UNION ALL
SELECT first_name, last_name FROM actor;

-- Monte uma query que una os resultados das tabelas customer e actor , exibindo os nomes que contêm a palavra "tracy" na tabela customer e os que contêm "je" na tabela actor . Exiba apenas os resultados únicos.
SELECT first_name, last_name FROM customer WHERE first_name LIKE '%tracy%'
UNION
SELECT first_name, last_name FROM actor WHERE first_name LIKE '%je%';

-- Monte uma query que exiba a união dos cinco últimos nomes da tabela actor , o primeiro nome da tabela staff e cinco nomes a partir da 15ª posição da tabela customer . Não permita que dados repetidos sejam exibidos. Ordene os resultados em ordem alfabética.
(SELECT first_name, last_name FROM actor ORDER BY actor_id DESC LIMIT 5)
UNION
(SELECT first_name, last_name FROM staff LIMIT 1)
UNION
(SELECT first_name, last_name FROM customer LIMIT 5 OFFSET 14)
ORDER BY first_name;

-- Você quer exibir uma lista paginada com os nomes e sobrenomes de todos os clientes e atores do banco de dados, em ordem alfabética. Considere que a paginação está sendo feita de 15 em 15 resultados e que você está na 4ª página. Monte uma query que simule esse cenário.
(SELECT first_name, last_name FROM customer LIMIT 7 OFFSET 28)
UNION
(SELECT first_name, last_name FROM actor LIMIT 8 OFFSET 32)
LIMIT 15;

-- ---------------------------------------------------------------------------------------------------------------------
-- exists

USE hotel;
-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.
SELECT 
   id, title
FROM
    Books AS b
WHERE
    EXISTS( SELECT 
            *
        FROM
            Books_Lent
        WHERE
            book_id = b.id);
            
-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.
SELECT 
    id, title
FROM
    Books AS b
WHERE
    EXISTS( SELECT 
            *
        FROM
            Books_Lent
        WHERE
            book_id = b.id)
        AND title LIKE '%lost%';

-- Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.
SELECT 
    `Name`
FROM
    Customers AS c
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            CarSales
        WHERE
            CustomerID = c.CustomerId);

-- Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
SELECT 
    ca.Name AS 'carro', co.Name AS 'comprador'
FROM
    Cars AS ca
        INNER JOIN
    Customers AS co
WHERE
    EXISTS( SELECT 
            *
        FROM
            CarSales
        WHERE
            CustomerID = co.CustomerId
                AND carID = ca.ID)
