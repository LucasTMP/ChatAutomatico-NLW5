[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

  <h1 align="center">ChatAutomatico-NLW5</h1>
<h3 align="center">Em desenvolvimento</h3>
<details open="open">
  <summary><b>Índice de Conteúdos</b></summary>
  <ol>
    <li>
      <a href="#Sobre-o-projeto">Sobre o Projeto</a>
      <ul>
        <li><a href="#Desenvolvido-com">Desenvolvido com</a></li>
      </ul>
    </li>
    <li>
      <a href="#Como-começar">Como começar</a>
    </li>
    <li><a href="#Como-usar">Como usar</a></li>
    <li><a href="#Imagens">Imagens</a></li>
    <li><a href="#Contato">Contato</a></li>
  </ol>
</details>

## Sobre o projeto

<p align="center" width="100%">
    <img width="33%" src="https://i.ibb.co/j6cPB2m/img1.jpg"> 
</p>

Esse projeto foi desenvolvido durante a trilha de NodeJS, na 5ª edição da NLW. Aprendemos conceitos sobre o que é um ORM, Migrations, Socket.io e como iniciar um projeto utilizando Typescript,Express e HTTP para gerenciamento das rotas, TypeORM para manipulação dos dados, e como usar o WebSocket para solucão em tempo real, com isso desevolvemos um chat de suporte em tempo real entre usuários e atendentes/adms.

### Desenvolvido com

O projeto foi desenvolvido utilizando as seguintes ferramentas/tecnologias:


-  **[TypeScript](https://golang.org)**
-  **[NodeJs](https://nodejs.org/en/)**
-  **[Yarn](https://yarnpkg.com)**
-  **[TypeOrm](https://typeorm.io/#/)**
-  **[Express](https://expressjs.com/pt-br/)**
-  **[NPM](https://www.npmjs.com/)**

## Como começar

Siga estes passos para clonar este repositório em sua maquina local.

Obs: Banco de dados é o Sqlite3.

```bash
- git clone https://github.com/LucasTMP/ChatAutomatico-NLW5.git
- cd ChatAutomatico-NLW5
```

Instalando dependências

```bash
- npm install
```

ou

```bash
- yarn install
```

Criando tabela das migrations do Sqlite3 e o DB por meio do cli do TypeOrm

```bash
- yarn typeorm migration:run
```

Gerando a build (Script configurado no package.json)
```bash
- npm start
```

## Como usar

Após utilizar o comando NPM START, basta abrir o seu browser e entrar no endpoint encontrado no localhost:3333/pages/client e localhost:3333/pages/admin. Na pagina de clientes basta clicar suporte, colocar sua dúvida e seu e-mail e clicar em iniciar chat. Assim na página de admin/atendente irá aparecer que um cliente está precisando tirar dúvidas, então basta clicar no botão em vermelho (Entrar em atendimento) e o chat de conversa abrirá.


## Imagens

<p align="center" width="100%">
    <img width="33%" src="https://github.com/LucasTMP/ChatAutomatico-NLW5/blob/master/src/img/admin1.JPG"> 
    <br>
    <em>Painel de adm/atendente, monstrando os cliente que estão esperando resposta no chat. </em>
</p>
<hr>

<p align="center" width="100%">
    <img width="33%" src="https://github.com/LucasTMP/ChatAutomatico-NLW5/blob/master/src/img/img3.JPG"> 
    <br>
    <em>Chat de conversa do cliente para o atendente.</em>
</p>
<hr>
<p align="center" width="100%">
    <img width="33%" src="https://github.com/LucasTMP/ChatAutomatico-NLW5/blob/master/src/img/img_resposta.JPG"> 
    <br>
    <em>Chat de conversa do atendente para o cliente.</em>
</p>

## Contato

Lucas Teixeira - [Linkedin](https://www.linkedin.com/in/lucastmp/) 

<b>E-mail:</b> lucas.tmp@outlook.com


<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
<!-- MARKDOWN LINKS -->
[contributors-shield]: https://img.shields.io/github/contributors/LucasTMP/ChatAutomatico-NLW5.svg?style=for-the-badge
[contributors-url]: https://github.com/LucasTMP/ChatAutomatico-NLW5/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/LucasTMP/ChatAutomatico-NLW5.svg?style=for-the-badge
[forks-url]: https://github.com/LucasTMP/ChatAutomatico-NLW5/network/members
[stars-shield]: https://img.shields.io/github/stars/LucasTMP/ChatAutomatico-NLW5.svg?style=for-the-badge
[stars-url]: https://github.com/LucasTMP/ChatAutomatico-NLW5/stargazers
[issues-shield]: https://img.shields.io/github/issues/LucasTMP/ChatAutomatico-NLW5.svg?style=for-the-badge
[issues-url]: https://github.com/LucasTMP/ChatAutomatico-NLW5/issues
[license-shield]: https://img.shields.io/github/license/LucasTMP/ChatAutomatico-NLW5.svg?style=for-the-badge
[license-url]: https://github.com/LucasTMP/ChatAutomatico-NLW5/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/lucastmp/
<!-- MARKDOWN IMAGES -->
