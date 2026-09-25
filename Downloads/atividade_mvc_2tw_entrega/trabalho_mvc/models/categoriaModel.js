const db = require('../config/firebase');

const ref = db.ref('categorias');

async function listar() {

    const registros = await ref.once('value');

    const dados = registros.val();

    if (!dados) return [];

    return Object.keys(dados).map(id => ({
        id,
        nome: dados[id].nome
    }));

}

async function salvar(categoria) {

    const novoRegistro = ref.push();

    await novoRegistro.set({
        nome: categoria.nome
    });

}

async function editar(id, categoria) {

    await ref.child(id).update({
        nome: categoria.nome
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
