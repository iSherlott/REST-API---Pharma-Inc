# Back-end Challenge 🏅 2021

## Introdução

<p>Este é um desafio para testar seus conhecimentos em Back-end;</p>
<p>O objetivo é avaliar a sua forma de estruturação e autonomia em decisões para construir algo escalável utilizando um framework moderno.</p>
<p>Você está livre para usar uma das seguintes tecnologias para desenvolver o back-end da solução deste tech challenge: Node.js ou C# .NET Core ou PHP Laravel ou RubyOnRails ou Go Lang ou Python FastAPI ou Kotlin SpringBoot ou Java ou Rust.</p>

## Dependencias

```
node ^14.2.1
axios: ^0.21.1,
body-parser: ^1.19.0,
express: ^4.17.1,
jsonwebtoken: ^8.5.1,
node-schedule: ^2.0.0,
sqlite3: ^5.0.2
```

## Case

<p>A empresa Pharma Inc, está trabalhando em um projeto em colaboração com sua base de clientes para facilitar a gestão e visualização da informação dos seus pacientes de maneira simples e objetiva em um Dashboard onde podem listar, filtrar e expandir os dados disponíveis.</p>
<p>O seu objetivo nesse projeto, é trabalhar no desenvolvimento da REST API da empresa Pharma Inc seguindo os requisitos propostos neste desafio.</p>

## Recursos

- Desenvolver REST API importando os dados do projeto: https://randomuser.me/documentation

- Trabalhar em um FORK deste repositório em seu usuário ou utilizar um repositório em seu github pessoal (não esqueça de colocar no readme a referência a este challenge)

## Token

```
token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MTYyMzkwMjJ9.IcI0eeQTHYtWR91CEGLHIdXxnvVscvyziG11wcDR-24
```

### Modelo de Dados:

- Para a definição do modelo, consultar o arquivo users.json que foi exportado do Random Users.
- imported_t: campo do tipo Date com a dia e hora que foi importado;
- status: campo do tipo Enum com os possíveis valores draft, trash e published;

### Sistema do CRON

<p>Para prosseguir com o desafio, precisaremos criar na API um sistema de atualização que vai importar os dados para a Base de Dados com a versão mais recente do Random User uma vez ao día. Adicionar aos arquivos de configuração o melhor horário para executar a importação.</p>
<p>A lista de arquivos do Random User, pode ser encontrada em:</p>

```
https://randomuser.me/api
```

<p>Escolher o formato que seja mais cômodo para importar todos os dados para a Base de Dados, o Random User tem os seguintes formatos:</p>

- JSON (default)
- PrettyJSON or pretty
- CSV
- YAML
- XML

<p>Ter em conta que:</p>

<p>Todos os produtos deverão ter os campos personalizados imported_t e status.
Importar os dados de maneira paginada para não sobrecargar a API do Random Users. Por exemplo, de 100 em usuários.</p>
<p>Limitar a importação a somente 2000 usuarios;</p>

### A REST API

<p>Na REST API teremos um CRUD com os seguintes endpoints:</p>

- GET /: Retornar uma mensagem "REST Back-end Challenge 20201209 Running"
- PUT /users/:userId: Será responsável por receber atualizações dso dados
- DELETE /users/:userId: Remover o user da base
- GET /users/:userId: Obter a informação somente de um user da base de dados
- GET /users: Listar todos os usuários da base de dados

### Extras

- Diferencial 1 Escrever Unit Test para os endpoints da REST API
- Diferencial 2 Executar o projeto usando Docker
- Diferencial 3 Escrever um esquema de segurança utilizando API KEY nos endpoints. Ref: https://learning.postman.com/docs/sending-requests/authorization/#api-key
- Diferencial 4 Descrever a documentação da API utilizando o conceito de Open API 3.0;

## Readme do Repositório

- Deve conter o título do projeto
- Uma descrição sobre o projeto em frase
- Deve conter uma lista com linguagem, framework e/ou tecnologias usadas como instalar e usar o projeto (instruções)
- Não esqueça o .gitignore
- Se está usando github pessoal, referencie que é um challenge by coodesh

## Finalização e Instruções para a Apresentação

<p>Avisar sobre a finalização e enviar para correção.</p>

- Confira se respondeu o Scorecard Back-End;
- Verique se o Readme está bom e faça o commit final em seu repositório;
- Acesse: https://coodesh.com/review-challenge;
- Coloque seu nome completo;
- Coloque seu e-mail;
- Adicione o repositório com a sua solução;
- Confira a vaga desejada;

## Biografia

```
https://www.sohamkamani.com/javascript/enums/
```
