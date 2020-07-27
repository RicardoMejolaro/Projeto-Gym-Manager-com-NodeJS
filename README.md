<h1 align=center>
<img src="https://img.icons8.com/ios-filled/50/000000/gum-.png" alt="Gym Manager" width="150px"/>

---

🚀 Site Gym Manager com NodeJS e banco de dados PostgreSQL ✔️ <br>

<img src="https://camo.githubusercontent.com/a45bd10a7ea5a30b5665d9869b0ce1324fa90350/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7374617475732d6163746976652d737563636573732e737667" alt="Status" data-canonical-src="https://img.shields.io/badge/status-active-success.svg" style="max-width:100%;">
<img src="https://camo.githubusercontent.com/890acbdcb87868b382af9a4b1fac507b9659d9bf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d626c75652e737667" alt="License" data-canonical-src="https://img.shields.io/badge/license-MIT-blue.svg" style="max-width:100%;">
</h1>

## 📑️ Índice

- [O projeto](#📝️-Sobre)
- [Tecnologias utilizadas](#🚀️-Tecnologias-utilizadas)
- [Acrescentado ao projeto original](#💻️-Acrescentado-ao-projeto-proposto)
- [Como usar](#💾️-Como-baixar/testar-o-projeto)
- [Bootcamp LaunchBase](#ℹ️-O-que-é-o-LaunchBase)
- [Contato](#-Desenvolvido-com-💙️-por)
- [Licença](#-Licença)

---

## 📝️ Sobre

O projeto trata-se de um site gerenciador de academia criado para consolidar o aprendizado
durante o Bootcamp, onde deve-se utilizar HTML, CSS, JavaScript,
NodeJS, Express, Template Engine Nunjucks, Banco de dados Postgres, no modelo MVC contendo menus, página index com visualização geral, páginas de criação, visualização, edição, exclusão de instrutores e membros da academia, paginação e filtros.

## Apresentação do site

<h1>
<img src="public/assets/gym-manager-com-db.gif" alt="Gym Manager">
</h1>

---

### 🚀️ Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- HTML
- CSS
- JavaScript
- NodeJS
- Express
- Template Engine Nunjucks
- Banco de dados PostgreSQL

---

### 💻️ Acrescentado ao projeto proposto

- Responsividade com media query baseado no toogle device toolbar do chrome.
- Estilizações próprias.

---

### 💾️ Como baixar/testar o projeto

- Você irá precisar instalar o [Git](https://git-scm.com/), [NodeJS](https://nodejs.org/pt-br/download/), [PostgreSQL](https://www.postgresql.org/), [Postbird](https://www.electronjs.org/apps/postbird) + [Visual Studio code](https://code.visualstudio.com/).



```bash
# Versões mínimas ou superiores.
$ node -v
v12.16.3

$ npm -v
6.14.5
```

- Para configurar, no bash digite os seguinte códigos:

```bash
# Clonar o repositório
$ git clone https://github.com/RicardoMejolaro/Projeto-Gym-Manager-com-NodeJS.git

#Entrar no diretório
$ cd gym-manager

#Abrir projeto no VsCode ou com seu prompt de comando de preferência
code . ||  cd gym-manager (Passo acima) 

#Com o terminal aberto rodar o comando
$ npm install (para instalar as dependências necessárias)

#Criar o banco de dados no seu PostgreSQL
O meu está nomeado como: gymmanager

#No arquivo db.js
No campo "database", incluir o nome do banco criado. (Passo acima)
Incluir o seus dados PostgreSQL nos campos: "user" e "password"

#Criar a tabela instructors
Nome da tabela: instructors

column	    type	    max length	default	        primary key	null

id	        integer		            auto increment	yes	        no
avatar_url	text                                              yes
name  	    text                                              yes
birth	      timestamp                                         yes
gender	    text                                              yes 
services	  text                                              yes
created_at	timestamp                                         yes

#Criar a tabela members
Nome da tabela: members

column	      type	    max length	default	        primary key	null	
id         integer		        auto increment	yes	        no	
avatar_ur text				                                yes	
name	      text				                                yes
email	      text				                                yes
gender	      text				                                yes	
birth	      timestamp				                            yes	
blood	      text				                                yes	
weight	      integer				                            yes
height	      integer				                            yes
instructor_id integer				                            yes

#Agora só rodar o projeto com o comando
$ npm start

#Pronto projeto abrirá em seu navegador padrão
Agora é só testar em seu navegador!

```
---

### ℹ️ O que é o LaunchBase?

O LaunchBase é um treinamento no formato de bootcamp online que tem duração de 8 semanas. A cada semana os conteúdos são liberados de acordo com um cronograma, guiando o aluno pelas ferramentas e conceitos mais modernos de desenvolvimento web para entrar com o pé direito nesse universo e ir direto ao ponto naquilo que realmente importa para alcançar seus maiores objetivos como dev..

### Desenvolvido com 💙️ por

***Ricardo Mejolaro*** 
<br/> 
<a href="https://www.linkedin.com/in/ricardo-mejolaro/">
<img src="public/assets/linkedin.png">
</a>

### Licença

Este projeto está licenciado sob a licença MIT - consulte a página [LICENSE](https://opensource.org/licenses/MIT) para obter detalhes.
