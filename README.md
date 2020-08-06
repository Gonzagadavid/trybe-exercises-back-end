Esse é um projeto para o conteúdo do bloco 27, sobre `Arquitetura de Software - Introdução ao MVC`.

### Antes de iniciar

Crie um fork desse projeto e para isso siga esse [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

Após feito o fork, clone o repositório criado para o seu computador.

Rode o `npm install`.

Vá para a branch master do seu projeto e execute o comando:
- `git branch` 

Verifique se as seguinte branch aparece:

  `exercise-branch`

- Mude para a branch `exercise-branch` com o comando `git checkout exercise-branch`. É nessa branch que você realizará a solução dos exercícios.

Observe o que deve ser feito nas instruções para cada exercício.

Após a solução dos exercícios, abra um PR no seu repositório forkado e, se quiser, mergeie para a master, sinta-se a vontade!

**Atenção!** Quando for criar o PR você irá se deparar com essa tela:

![PR do exercício](images/example-pr.png)

É necessário realizar uma mudança. Clique no *base repository* como na imagem abaixo:

![Mudando a base do repositório](images/change-base.png)

Mude para o seu repositório. Seu nome estará na frente do nome dele, por exemplo: `antonio/TicTacToe`. Depois desse passo a página deve ficar assim:

![Após mudança](images/after-change.png)

Agora basta criar o PULL REQUEST clicando no botão `Create Pull Request`.

Para cada PR realize esse processo.

### COMEÇANDO OS EXERCÍCIOS

Vamos criar uma aplicação simples que faz chamadas a uma [API de piadas sobre o Chuck Norris](https://api.chucknorris.io/). A aplicação terá 2 "partes". Uma que mostra as categorias das piadas e direciona a pessoa para a segunda parte, onde a chamada da API de piadas é feita e a piada é de fato retornada. Então, vamos lá ?

#### Exercício 1

Vamos começar fazendo a parte das categorias. Para essa parte já criamos a view para você!

- Primeiro crie uma pasta models e nela crie um model para as categorias. Nele deve haver uma função que faz uma chamada a API de categorias.

- Agora, vamos criar o controller. Lembre-se que o controller tem como uma de suas funções unificar o model com nossa view.
Importe o model das categorias e use a função criada anteriormente para obter uma lista de categorias. Depois, utilize o `res.`render para renderizar a view de categorias e passar a variável categories para ela. A view se encontra na pasta `views/categories`.

- Agora, no nosso arquivo `index.js` vamos usar o controller que acabamos de criar. Ele deve estar ligado ao endpoint `/categories`. Não se esqueça de usar o express para realizar e o ejs como template engine.

- Para finalizar, vamos criar mais uma função no controller de categorias. Queremos que ao acessar o endpoint '/', o usuário seja levado para o endpoint '/categories', crie uma função que faça esse redirecionamento. 
DICA: Olhe a função `res.redirect()` na documentação do express.


---

#### Exercício 2

Agora vamos as piadas em si. Essa etapa será um pouco menos descritiva e dessa vez você terá que fazer as 3 partes do modelo MVC: a view, o controller e o model.

- O model das piadas deve fazer chamadas para o endpoint de piada aleatório e para o endpoint de piada por categoria.

- A view deve conter pelo menos 2 campos, um botão para voltar para a página de categorias e um campo onde vai exibir a piada retornada pela API

- O endpoint `/jokes` deve retornar uma piada aleatória sem categoria específica ( o que corresponde ao link da categoria all ) e os endpoints `/jokes/:categorie` deve exibir uma piada de uma categoria específica, que vem como parêmetro da URL.
