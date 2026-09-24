# Atividade MVC - 2TW

Projeto desenvolvido a partir da estrutura da atividade/base `2tw-ds-base-node-firebase`, usando Express, EJS e Firebase Realtime Database.

## Requisitos da atividade

- Categoria: LISTAR e SALVAR
- Fornecedor: LISTAR e SALVAR
- Cliente: LISTAR e SALVAR
- Fornecedor: id, nome e cnpj
- Cliente: id, nome e email
- Deploy no Render
- Repositório no GitHub

## Estrutura MVC

- `models/` - acesso ao Firebase
- `controllers/` - regras das ações listar/salvar
- `routes/` - rotas HTTP
- `views/` - páginas EJS
- `config/firebase.js` - conexão com Firebase

## Rotas

- `/categorias`
- `/fornecedores`
- `/clientes`

Em cada página:
- GET `/` lista os registros
- POST `/salvar` salva um novo registro

## Configuração local

1. Instale as dependências com `npm install`.
2. Crie `.env` usando `.env.example`.
3. Preencha as variáveis do Firebase.
4. Execute `npm start`.

## Render

Configure no serviço do Render as mesmas variáveis do `.env` como Environment Variables. O comando de início é `npm start`.
