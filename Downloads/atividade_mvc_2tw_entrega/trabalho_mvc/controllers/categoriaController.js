const model = require('../models/categoriaModel');
exports.index = async (req, res, next) => {
  try { res.render('categorias/index', { categorias: await model.listar() }); }
  catch (err) { next(err); }
};
exports.salvar = async (req, res, next) => {
  try {
    const nome = String(req.body.nome || '').trim();
    if (!nome) return res.redirect('/categorias');
    await model.salvar({ nome: nome.toUpperCase() });
    res.redirect('/categorias');
  } catch (err) { next(err); }
};
