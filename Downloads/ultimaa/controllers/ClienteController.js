const Cliente = require("../models/Cliente");

function listar(req, res) { res.json(Cliente.listar()); }
function consultar(req, res) {
  const cliente = Cliente.consultar(Number(req.params.id));
  if (!cliente) return res.status(404).json({ erro: "Cliente não encontrado" });
  res.json(cliente);
}
function cadastrar(req, res) {
  const { nome, email } = req.body || {};
  if (typeof nome !== "string" || !nome.trim() || typeof email !== "string" || !email.trim()) {
    return res.status(400).json({ erro: "Nome e email são obrigatórios" });
  }
  res.status(201).json(Cliente.cadastrar({ nome: nome.trim(), email: email.trim() }));
}
function alterar(req, res) {
  const { nome, email } = req.body || {};
  if (typeof nome !== "string" || !nome.trim() || typeof email !== "string" || !email.trim()) {
    return res.status(400).json({ erro: "Nome e email são obrigatórios" });
  }
  const cliente = Cliente.alterar(Number(req.params.id), { nome: nome.trim(), email: email.trim() });
  if (!cliente) return res.status(404).json({ erro: "Cliente não encontrado" });
  res.json(cliente);
}
function excluir(req, res) {
  if (!Cliente.excluir(Number(req.params.id))) return res.status(404).json({ erro: "Cliente não encontrado" });
  res.json({ mensagem: "Cliente excluído com sucesso" });
}
module.exports = { listar, consultar, cadastrar, alterar, excluir };
