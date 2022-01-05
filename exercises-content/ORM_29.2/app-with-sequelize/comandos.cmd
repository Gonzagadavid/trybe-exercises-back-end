npm install sequelize sequelize-cli mysql2  

- dependencias necessárias para utilizar o sequelize

-------------------------------------------------------
npx sequelize-cli init

- inicia o sequelize criando as pastas:

config : contém um arquivo de configuração, que "fala" para o CLI como conectar-se com o nosso banco de dados;
models : contém todos os modelos da nossa aplicação;
migrations : contém todos os arquivos de migração da nossa aplicação;
seeders : contém todos os arquivos de "seeds".

-----------------------------------------------------------
npx sequelize db:create

- cria o banco usando o CLI do Sequelize

---------------------------------------------------------
npx sequelize model:generate --name NomeDoModel --attributes nomeDoAtributo:string

- Além de gerar o model, ele também gera uma migration que irá criar a tabela no banco de dados

------------------------------------------------------------
npx sequelize db:migrate

- executa a migração para o banco de dados

--------------------------------------------------------------
npx sequelize db:migrate:undo

- reverte a ultima migração feita para o banco de dados

--------------------------------------------------------------
npx sequelize migration:generate --name add-column-NomeDaColuna-table-NomeDaTabela

- adiciona uma nova coluna na tabela criando um novo arquivo de migração

----------------------------------------------------------------------
npx sequelize seed:generate --name users

- cria um seed para povoar o banco de dados

--------------------------------------------------------------------
npx sequelize db:seed:all

- executa o seed

---------------------------------------------------------------------
npx sequelize db:seed:undo:all

- reverte o seed

-------------------------------------------------------------------