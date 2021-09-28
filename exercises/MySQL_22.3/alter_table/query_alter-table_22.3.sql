-- Desafios sobre ALTER TABLE

USE hr;

-- Escreva uma query SQL para alterar na tabela locations o nome da coluna street_address para address , mantendo o mesmo tipo e tamanho de dados.
ALTER TABLE locations CHANGE street_address address VARCHAR(40) NOT NULL;

-- Escreva uma query SQL para alterar o nome da coluna region_name para region , mantendo o mesmo tipo e tamanho de dados.
ALTER TABLE regions CHANGE REGION_NAME REGION VARCHAR(25) NOT NULL;

-- Escreva uma query SQL para alterar o nome da coluna country_name para country , mantendo o mesmo tipo e tamanho de dados.
ALTER TABLE countries CHANGE COUNTRY_NAME COUNTRY VARCHAR(40) NOT NULL;
