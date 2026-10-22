const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const clienteRoutes = require("./routes/clienteRoutes");
const Cliente = require("./models/Cliente");

app.get("/api", (req, res) => {
  res.json({
    nome: "API de Clientes",
    versao: "1.0.0",
    descricao: "API REST para cadastrar, consultar, alterar e excluir clientes.",
    endpoints: [
      { metodo: "GET", caminho: "/clientes", descricao: "Lista todos os clientes" },
      { metodo: "GET", caminho: "/clientes/:id", descricao: "Consulta um cliente por ID" },
      { metodo: "POST", caminho: "/clientes", descricao: "Cadastra um cliente (JSON: nome, email)" },
      { metodo: "PUT", caminho: "/clientes/:id", descricao: "Altera nome e email de um cliente" },
      { metodo: "DELETE", caminho: "/clientes/:id", descricao: "Exclui um cliente" }
    ],
    exemploCadastro: { nome: "Ana Costa", email: "ana@email.com" }
  });
});

app.get("/api/clientes", (req, res) => res.json(Cliente.listar()));
app.get("/api/resposta", (req, res) => res.json({
  status: "sucesso",
  mensagem: "Resposta JSON da API",
  dados: Cliente.listar()
}));

app.use("/clientes", clienteRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor funcionando na porta ${PORT}`);
});
