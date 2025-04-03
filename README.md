# teste-tinnova

Conforme solicitado no desafio da Tinnova, o projeto encontra-se nesse repositório e está dividido em três pastas principais: exercises, api e web.

Antes de iniciar, é necessário ter o Node instalado na máquina, utilizei a versão v22.13.1 para desenvolver, no entanto, pode ser que versões mais antigas/novas funcionem também.

Para executar os exercicios, conforme os itens 1 a 4 do pdf de testes, é necessário entrar na pasta exercises e executar o comando "npm install" para instalar as dependências.
Quando finalizado, basta digitar "npm run exercises" para rodar todos os exercícios. Deixei como padrão os inputs dos testes, mas é possível modificá-los no arquivo "start-exercises.ts".

Para executar a api, é necessário entrar na pasta api e também executar o comando "npm install". Uma vez terminado, é preciso digitar o comando "npm run api" para executar a aplicação. Ela estará rodando na porta 3001 e é possível acessá-la através da url "http://localhost:3001". Utilizei o Swagger para criar uma documentação, então é possível testar as rotas isoladamente através dela, sem precisar de postman, insomnia, etc. Além disso, utilizei o Sqlite como banco de dados para facilitar o desenvolvimento.

Para executar a aplicação web, entre na pasta web e faça a instalação das dependências usando o comando "npm install". O site estará rodando na porta 5173 e é possível acessá-la através da url "http://localhost:5173". Para o correto funcionamento, é necessário que a api também esteja em execução.
Com o web e a api rodando, é possível realizar as funcionalidades solicitadas no teste, como criação de veículos, edição, remoção, etc.
