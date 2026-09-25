const express = require('express');

const router = express.Router();

const controller = require('../controllers/categoriaController');

router.get('/', controller.index);

router.post('/salvar', controller.salvar);

// EDITAR
router.post('/editar/:id', controller.editar);

// EXCLUIR
router.get('/excluir/:id', controller.excluir);

module.exports = router;