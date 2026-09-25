const model = require('../models/categoriaModel');

exports.index = async (req, res, next) => {
    try {
        res.render('categorias/index', {
            categorias: await model.listar()
        });
    } catch (err) {
        next(err);
    }
};

exports.salvar = async (req, res, next) => {
    try {
        const nome = String(req.body.nome || '').trim();

        if (!nome) {
            return res.redirect('/categorias');
        }

        await model.salvar({
            nome: nome.toUpperCase()
        });

        res.redirect('/categorias');

    } catch (err) {
        next(err);
    }
};

// EDITAR
exports.editar = async (req, res, next) => {
    try {
        const id = req.params.id;
        const nome = String(req.body.nome || '').trim();

        if (!nome) {
            return res.redirect('/categorias');
        }

        await model.editar(id, {
            nome: nome.toUpperCase()
        });

        res.redirect('/categorias');

    } catch (err) {
        next(err);
    }
};

// EXCLUIR
exports.excluir = async (req, res, next) => {
    try {
        const id = req.params.id;

        await model.excluir(id);

        res.redirect('/categorias');

    } catch (err) {
        next(err);
    }
};