const model = require('../models/fornecedorModel');

exports.index = async (req, res, next) => {
    try {
        res.render('fornecedores/index', {
            fornecedores: await model.listar()
        });
    } catch (err) {
        next(err);
    }
};

exports.salvar = async (req, res, next) => {
    try {

        const nome = String(req.body.nome || '').trim();
        const cnpj = String(req.body.cnpj || '').trim();

        if (!nome || !cnpj) {
            return res.redirect('/fornecedores');
        }

        await model.salvar({
            nome,
            cnpj
        });

        res.redirect('/fornecedores');

    } catch (err) {
        next(err);
    }
};

// ABRIR TELA DE EDITAR
exports.telaEditar = async (req, res, next) => {
    try {

        const id = req.params.id;

        const fornecedores = await model.listar();

        const fornecedor = fornecedores.find(f => f.id === id);

        if (!fornecedor) {
            return res.redirect('/fornecedores');
        }

        res.render('fornecedores/editar', {
            fornecedor
        });

    } catch (err) {
        next(err);
    }
};

// SALVAR EDIÇÃO
exports.editar = async (req, res, next) => {
    try {

        const id = req.params.id;

        const nome = String(req.body.nome || '').trim();
        const cnpj = String(req.body.cnpj || '').trim();

        if (!nome || !cnpj) {
            return res.redirect('/fornecedores');
        }

        await model.editar(id, {
            nome,
            cnpj
        });

        res.redirect('/fornecedores');

    } catch (err) {
        next(err);
    }
};

// EXCLUIR
exports.excluir = async (req, res, next) => {
    try {

        const id = req.params.id;

        await model.excluir(id);

        res.redirect('/fornecedores');

    } catch (err) {
        next(err);
    }
};