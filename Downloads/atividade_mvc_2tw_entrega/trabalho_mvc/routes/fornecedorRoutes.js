const express = require('express');

const router = express.Router();

const controller = require('../controllers/fornecedorController');

router.get('/', controller.index);

router.post('/salvar', controller.salvar);

// ABRIR TELA DE EDITAR
router.get('/editar/:id', controller.telaEditar);

// SALVAR EDIÇÃO
router.post('/editar/:id', controller.editar);

// EXCLUIR
router.get('/excluir/:id', controller.excluir);

module.exports = router;