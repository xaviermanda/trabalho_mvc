// Modelo em memória para demonstração.
// Para persistir dados entre reinicializações, conecte um banco de dados.
let clientes = [
  { id: 1, nome: "Amanda", email: "amanda@email.com" },
  { id: 2, nome: "Maria", email: "maria@email.com" }
];
let proximoId = 3;

function listar() { return clientes; }
function consultar(id) { return clientes.find(c => c.id === id); }
function cadastrar(dados) {
  const cliente = { id: proximoId++, nome: dados.nome, email: dados.email };
  clientes.push(cliente);
  return cliente;
}
function alterar(id, dados) {
  const cliente = consultar(id);
  if (!cliente) return null;
  cliente.nome = dados.nome;
  cliente.email = dados.email;
  return cliente;
}
function excluir(id) {
  const indice = clientes.findIndex(c => c.id === id);
  if (indice === -1) return false;
  clientes.splice(indice, 1);
  return true;
}
module.exports = { listar, consultar, cadastrar, alterar, excluir };
