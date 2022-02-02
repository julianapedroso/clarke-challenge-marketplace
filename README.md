# Clarke Energia Challenge | Marketplace ⚡
#### Desafio Full Stack proposto pela empresa Clarke Energia para vaga de Desenvolvedor(a) Junior.
<br />

<h2 align='center'>
<img src="https://image.pitchbook.com/LvQESjOuhmpilIshY3fCm2uJ0DK1638455660190_200x200" width="25%" margin="2rem" alt="Logo Clarke"/>
</h2>

<h4 align='center'>
👉 Status: Concluído ✅👏
</h4>
<hr />

### ☁️ Deploy:


### ✨ Funcionamento:
#### Back-End
##### Auth
- [x] Rotas:
  - [x] POST - Signin
  - [x] POST - Sinup 
  - [x] GET - Auth by Id 
- [x] Verificação de hash com bcrypt
- [x] Autenticação com JWT

##### Produto
- [x] Rotas
  - [x] POST - Provider
  - [x] GET - All Providers
  - [x] GET - Providers by Id
- [x] Cada forncedor foi criado com base em dados fictícios e receberam as seguintes informações:
  - [x] Nome
  - [x] Logo
  - [x] Estado de origem
  - [x] Custo por kWh
  - [x] Limite mínimo de consumo
  - [x] Número total de clientes
  - [x] Avaliação média dos clientes

#### Front-End
##### Auth
- [x] Cadastrar cliente
- [x] Logar no sistema
- [x] Autenticação com JWT 
- [x] Persistência de login com uso de LocalStorage

##### Produto
- [x] Mostrar todos os fornecedores gerados a partir dos dados consumidos pela API
- [x] Mostrar detalhes de cada fornecedor através do Id
- [x] Filtrar forcenedor de acordo com a demanda desejada
- [x] Escolher forcenedor de acordo com a demanda desejada
- [x] Paginar fornecedores em listagem de 5 em 5

#### Bonus
- [x] Responsividade

### 💻 Tecnologias:
As seguintes tecnologias foram usadas na construção do projeto:
#### Back-End
- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)

#### Banco
- [MongoDB](https://www.mongodb.com/pt-br/1)
#### Front-End
- [React.js](https://pt-br.reactjs.org/)
- [Axios](https://www.npmjs.com/package/axios)
- [React Router Dom](https://www.npmjs.com/package/react-router-dom)
- [Figma](https://www.figma.com)

### 🎨 Layout:
- [Sass](https://www.npmjs.com/package/sass)

### 📂 Como instalar o projeto localmente:

```bash
# Passo 1. Clone este repositório no terminal:
$ git clone https://github.com/julianapedroso/clarke-challenge-marketplace.git

# Passo 2. Acesse a pasta do projeto:
$ cd clarke-challenge-marketplace

# Passo 3. Na raiz do projeto, instale as dependências do Back-End:
$ npm install 
or
yarn

# * -- PARA O BACK-END -- *

# Passo 4. Crie um arquivo .env
$ touch .env

# Passo 5. Configure as variáveis de ambiente
PORT=8080
DB_USER=seu-usuario
DB_PASS=sua-senha
SECRET=uma-string-secreta

# Passo 6. Utilize as variáveis de ambiente na url obtida através de uma conta no MongoDB Atlas (Databases -> Connect -> Connect your application)

# * -- PARA O FRONT-END -- *

# Passo 7. Acesse a pasta client:
$ cd client

# Passo 8. Já dentro da pasta client, instale as dependências do Front-End:
$ npm install 
or
yarn

# Passo 9. Retorne para a raiz do projeto e execute o sequinte comando para rodar back e front simultaneamente:
$ npm run dev
or
yarn dev

# Passo 10. Abra: http://localhost:3000 no seu navegador para ver a aplicação ✨
```

### 🖼 Projeto:
#### Mobile
![clarke-mobile](https://user-images.githubusercontent.com/68782453/152094657-edd51fc0-26f9-4362-b854-9871bcae51a1.gif)

#### Tablet
![clarke-tablet](https://user-images.githubusercontent.com/68782453/152094970-8a59dfaa-0174-4ab0-a1d4-8483d1afedfc.gif)

#### Desktop
![clarke-desktop](https://user-images.githubusercontent.com/68782453/152095304-68a6dc58-5dea-4659-9434-aa28ce0feeea.gif)
### Autora

<table>
  <tr>
    </td>
    <td align="center"><a href="https://www.linkedin.com/in/julianacristinapedroso/">
    <img src="https://avatars.githubusercontent.com/u/68782453?v=4" width="100px" alt="Juliana's avatar"/>
    <br />
    <sub><b>Juliana Pedroso</b></sub></a> <a href="https://github.com/belatoledo">🌻</a></sub><br /></td>     
</table>
