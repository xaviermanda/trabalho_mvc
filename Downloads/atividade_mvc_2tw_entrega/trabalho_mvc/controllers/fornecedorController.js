const model = require('../models/fornecedorModel');
exports.index = async (req, res, next) => {
  try { res.render('fornecedores/index', { fornecedores: await model.listar() }); }
  catch (err) { next(err); }
};
exports.salvar = async (req, res, next) => {
  try {
    const nome = String(req.body.nome || '').trim();
    const cnpj = String(req.body.cnpj || '').trim();
    if (!nome || !cnpj) return res.redirect('/fornecedores');
    await model.salvar({ nome, cnpj });
    res.redirect('/fornecedores');
  } catch (err) { next(err); }
};
