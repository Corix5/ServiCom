const {Router} = require('express');
const router = Router();

const { renderVacanteForm, renderVacante, createVacante} = require('../controllers/vacante.controller')

router.get('/vacantes/add', renderVacanteForm);

router.post('/vacantes/add', createVacante);

router.get('/vacantes', renderVacante);

module.exports = router;