# Central de Clientes — rosa bebê e branco

Projeto escolar de API REST em Node.js + Express no padrão MVC, com interface web responsiva e app React Native para Expo Snack.

## Rodar localmente
Na pasta raiz:
```bash
npm install
npm start
```
Abra http://localhost:3000 para a interface web rosa e branca.

## Endpoints e documentação
- `GET /api` — documentação da API em JSON
- `GET /api/resposta` — exemplo de resposta JSON com os clientes
- `GET /clientes` — lista clientes
- `GET /clientes/:id` — consulta cliente
- `POST /clientes` — cadastra `{ "nome": "Ana Costa", "email": "ana@email.com" }`
- `PUT /clientes/:id` — altera nome e e-mail
- `DELETE /clientes/:id` — exclui cliente

A interface web inclui links para a documentação e para ver respostas JSON diretamente no navegador.

## Publicar no Render
Crie um Web Service ligado ao repositório GitHub:
- Build Command: `npm install`
- Start Command: `npm start`

O serviço serve tanto a interface web quanto a API. A URL principal abre o site; `/api` mostra a documentação; `/api/resposta` mostra uma resposta JSON; `/clientes` lista os clientes.

## Expo Snack
1. Abra `https://snack.expo.dev/`.
2. Copie o conteúdo de `expo-snack/App.js` para o `App.js` do Snack.
3. Substitua `https://SUA-API.onrender.com` pela URL real do Render, sem `/clientes` no final.
4. O app faz GET, POST, PUT e DELETE usando a API publicada.

## MVC
- `models/Cliente.js`: dados e operações do modelo.
- `controllers/ClienteController.js`: lógica e validação.
- `routes/clienteRoutes.js`: rotas REST.
- `index.js`: inicializa Express e serve a interface web.

## Aviso sobre armazenamento
Os clientes ficam em memória; os dados podem se perder quando o servidor reinicia. Para persistência real, é necessário banco de dados.
