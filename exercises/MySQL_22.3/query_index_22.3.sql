-- Verifique o impacto de um FULLTEXT INDEX na tabela category (banco de dados sakila ), adicionando-o na coluna name . Após ter adicionado o índice, mensure o custo da query utilizando o execution plan , como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.
CREATE FULLTEXT INDEX index_nameCategory ON sakila.category(name);
-- -- Após ter criado o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action'); -- index_image_1.png

DROP INDEX index_nameCategory ON sakila.category;
-- Após ter excluído o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE name LIKE '%action%'; -- index_image_2.png


-- Verifique o impacto de um INDEX na tabela address (banco de dados sakila ) adicionando-o na coluna postal_code . Após ter adicionado o índice, mensure o custo da query utilizando o execution plan, como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.
-- Mensure o custo com a seguinte query:
CREATE INDEX index_postal ON sakila.address(postal_code);

SELECT *
FROM sakila.address
WHERE postal_code = '36693'; -- index_image_3.png

DROP INDEX index_postal ON sakila.address;

SELECT *
FROM sakila.address
WHERE postal_code = '36693'; -- index_image_4.png
