require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/indexRoutes'));
app.use('/categorias', require('./routes/categoriaRoutes'));
app.use('/fornecedores', require('./routes/fornecedorRoutes'));
app.use('/clientes', require('./routes/clienteRoutes'));

app.use((req, res) => res.status(404).send('Página não encontrada. <a href="/">Voltar</a>'));
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Erro interno do servidor. Verifique as configurações do Firebase. <a href="/">Voltar</a>');
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
