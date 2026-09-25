const model = require('../models/clienteModel');

exports.index = async (req, res, next) => {

    try {
        res.render('clientes/index', {
            clientes: await model.listar()
        });
    } catch (err) {
        next(err);
    }

};

exports.salvar = async (req, res, next) => {

    try {

        const nome = String(req.body.nome || '').trim();
        const email = String(req.body.email || '').trim();

        if (!nome || !email) {
            return res.redirect('/clientes');
        }

        await model.salvar({
            nome,
            email
        });

        res.redirect('/clientes');

    } catch (err) {
        next(err);
    }

};

// EDITAR
exports.editar = async (req, res, next) => {

    try {

        const id = req.params.id;
        const nome = String(req.body.nome || '').trim();
        const email = String(req.body.email || '').trim();

        if (!nome || !email) {
            return res.redirect('/clientes');
        }

        await model.editar(id, {
            nome,
            email
        });

        res.redirect('/clientes');

    } catch (err) {
        next(err);
    }

};

// EXCLUIR
exports.excluir = async (req, res, next) => {

    try {

        const id = req.params.id;

        await model.excluir(id);

        res.redirect('/clientes');

    } catch (err) {
        next(err);
    }

};