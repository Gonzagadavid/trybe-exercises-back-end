```mysql
CREATE DATABASE IF NOT EXISTS model_example;

USE model_example;

CREATE TABLE authors
(
    id INT NOT NULL auto_increment,
    first_name VARCHAR(30) NOT NULL,
    middle_name VARCHAR(30),
    last_name VARCHAR(30) NOT NULL,
    birthday DATE,
    nationality VARCHAR(100),
    PRIMARY KEY(id)
);

INSERT INTO authors (first_name,middle_name,last_name,birthday,nationality)

VALUES ('George','R. R.','Martin','1948-09-20','norte-americano'),
    ('J.','R. R.','Tolkien','1892-01-03','britânico'),
    ('Isaac',NULL,'Asimov','1920-01-20','russo-americano'),
    ('Frank',NULL,'Herbert','1920-02-11','norte-americano'),
    ('Júlio',NULL,'Verne','1905-03-24','francês');
```

## Vamos praticar
### Vamos colocar em prática tudo o que aprendemos até aqui. Primeiro, crie a tabela Books usando o SQL abaixo

```mysql
CREATE TABLE books (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(90) NOT NULL,
    author_id INT(11) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (author_id) REFERENCES authors (id)
);

INSERT INTO books (title, author_id)
VALUES
    ('A Game of Thrones', 1),
    ('A Clash of Kings', 1),
    ('A Storm of Swords', 1),
    ('The Lord of The Rings - The Fellowship of the Ring', 2),
    ('The Lord of The Rings - The Two Towers', 2),
    ('The Lord of The Rings - The Return of The King', 2),
    ('Foundation', 3);

```
Depois de criar a tabela no banco de dados, faça as seguintes implementações.
- Crie um modelo Book e defina o método getAll para retornar a lista de todos os livros.
- Crie uma rota /books para trazer a lista de todos os livros.
- Crie um método getByAuthorId no modelo Book , para retornar apenas livros associados com um determinado author_id . E altere o middleware da rota books criado no passo 2 para receber uma query string com a chave author_id , e retornar apenas os livros associados.

Continuando o exercício anterior faça o seguinte.
Crie uma rota /books/:id e retorne o livro de acordo com o id passado por parâmetro. Se não existir, retorne um json no seguinte formato { message: 'Not found' } .


Ainda usando a tabela books como referência crie uma rota books do tipo POST . Faça as seguintes validações:
Título não pode ser vazio;
Título precisa ter pelo menos três caracteres;
O campo author_id não pode ser vazio;
O campo author_id só é válido se existir um autor com esse id;
Se algum dos requisitos anteriores não for atendido, retornar um json no seguinte formato { message: 'Dados inválidos' } com status 400 . Caso contrário, insira o livro na tabela books e retorne o json { message: 'Livro criado com sucesso! '} com o status 201 .
