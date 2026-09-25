const db = require('../config/firebase');

const ref = db.ref('clientes');

async function listar() {

    const registros = await ref.once('value');

    const dados = registros.val();

    if (!dados) return [];

    return Object.keys(dados).map(id => ({
        id,
        nome: dados[id].nome || '',
        email: dados[id].email || ''
    }));

}

async function salvar(cliente) {

    const novoRegistro = ref.push();

    await novoRegistro.set({
        nome: cliente.nome,
        email: cliente.email
    });

}

async function editar(id, cliente) {

    await ref.child(id).update({
        nome: cliente.nome,
        email: cliente.email
    });

}

async function excluir(id) {

    await ref.child(id).remove();

}

module.exports = {
    listar,
    salvar,
    editar,
    excluir
};