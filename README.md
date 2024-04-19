
Dositio - Documentação
Descrição do Projeto
Dositio é uma aplicação de exemplo desenvolvida como parte de um projeto prático em uma disciplina de desenvolvimento de APIs de backend utilizando Node.js/Fastify, com bancos de dados não-relacionais (MongoDB). O projeto atualmente implementa operações CRUD (Create, Read, Update, Delete) para produtos e autenticação de usuários.

Funcionalidades Implementadas
Até o momento, as seguintes rotas foram implementadas:

Produtos:
GET /products: Retorna a lista de todos os produtos.
GET /products/:id: Retorna os detalhes de um produto específico.
POST /products: Cria um novo produto.
PUT /products/:id: Atualiza os detalhes de um produto existente.
DELETE /products/:id: Remove um produto existente.
Autenticação:
POST /auth: Rota de autenticação de usuários.
Novas Funcionalidades Adicionadas
Além das funcionalidades básicas, foram adicionadas as seguintes rotas:

Categorias:
GET /categories: Retorna a lista de categorias de produtos existentes.
POST /categories: Cria uma nova categoria no banco de dados. Garante a validação dos campos (apenas name e img_url). Retorna status 201 sem conteúdo.
PUT /categories/:id: Atualiza os dados de uma categoria específica.
DELETE /categories/:id: Remove uma categoria existente.
Relacionamentos:
GET /categories/:id/products: Retorna todos os produtos de uma categoria específica.
Usuários:
POST /register: Cria um novo usuário. Garante a validação dos campos.
Instruções de Uso
Para utilizar a aplicação, siga os passos abaixo:

Instalação de Dependências:
Certifique-se de ter o Node.js e o MongoDB instalados em seu sistema.
Clone o repositório do projeto:
bash
Copy code
git clone https://github.com/seu-usuario/dositio.git
Navegue até o diretório do projeto:
bash
Copy code
cd dositio
Instale as dependências:
Copy code
npm install
Configuração do Ambiente:
Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente necessárias, como o URI do MongoDB e a chave secreta para JWT.
Execução da Aplicação:
Inicie o servidor:
sql
Copy code
npm start
Uso das Rotas:
Utilize um cliente HTTP (como Postman ou Insomnia) para acessar as rotas disponíveis, conforme descrito acima.
Contribuindo
Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests para melhorar este projeto. Certifique-se de seguir as diretrizes de contribuição.
