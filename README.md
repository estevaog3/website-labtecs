# website-labtecs

## Principais tecnologias utilizadas

- _frontend_
  - React
  - Axios
- _backend_
  - Express
  - MongoDB

## Como executar

### Pré-requisitos

Estes programas devem estar instalados previamente no seu computador para executar este projeto:

- [yarn](https://yarnpkg.com/) (ou [npm](https://yarnpkg.com/)), [node](https://nodejs.org/en/), [MongoDB Community Server](https://www.mongodb.com/download-center/community)

### Passo a passo

0. Abra o terminal (linha de comando)

1. Clone o repositório

2. Mova para o diretório do projeto

```
cd website-labtecs
```

3. Inicie o banco de dados localmente no diretório `backend`:

```
cd backend && yarn mongo
```

ou, com npm:

```
cd backend && npm run mongo
```

4. Abra outro terminal, novamente no diretório `website-labtecs`

5. Inicie o servidor localmente no diretório `backend`:

```
cd backend && yarn start
```

ou, com npm:

```
cd backend && npm run start
```

6. Abra ainda outro terminal no diretório `website-labtecs`

7. Inicie o app no frontend:

```
cd frontend && yarn start
```

ou, com npm:

```
cd frontend && npm run start
```

8. Abra o endereço `http://localhost:3000` no seu navegador, caso ele não tenha sido aberto automaticamente.

9. Pronto
