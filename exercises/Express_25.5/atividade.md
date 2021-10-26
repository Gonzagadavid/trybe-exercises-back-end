7. Crie uma rota POST /teams que receba uma requisição que envie name , initials , country e league no body da requisção, onde:
- name deve ter mais de 5 caracteres;
- initials deve conter no máximo 3 caracteres em caixa alta;
- country deve ter mais de 3 caracteres;
- league este campo é opcional;
- Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, ex: status 400 e { "message": "invalid data" } ;
- Caso tenha sucesso deve ser gravado em um arquivo o dado recebido e retornado uma resposta com o código de status e um JSON com as informações do time criado;
8. Na rota GET /teams deve trazer todos os times cadastrados, onde:
- Se não existir times cadastrados retorne um array vazio e um status code, ex: status 200 e { "teams": [] } ;
- Se existir times cadastrados retorne um array com os times e um status code;
- Dicas: separe suas rotas em arquivos e para gravar/ler dados do arquivo, utilize o módulo FS do Node.js (Não esqueça de criar o arquivo teams.json na raiz do projeto)
