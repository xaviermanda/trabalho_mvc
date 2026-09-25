const db = require('../config/firebase');

const ref = db.ref('fornecedores');

async function listar() {

    const registros = await ref.once('value');

    const dados = registros.val();

    if (!dados) return [];

    return Object.keys(dados).map(id => ({
        id,
        nome: dados[id].nome || '',
        cnpj: dados[id].cnpj || ''
    }));

}

async function salvar(fornecedor) {

    const novoRegistro = ref.push();

    await novoRegistro.set({
        nome: fornecedor.nome,
        cnpj: fornecedor.cnpj
    });

}

async function editar(id, fornecedor) {

    await ref.child(id).update({
        nome: fornecedor.nome,
        cnpj: fornecedor.cnpj
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