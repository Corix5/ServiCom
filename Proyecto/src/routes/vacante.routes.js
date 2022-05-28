const {Router} = require('express');
const router = Router();

const { renderVacanteForm, renderVacante, createVacante, filter} = require('../controllers/vacante.controller')

router.get('/vacantes/add', renderVacanteForm);

router.post('/vacantes/add', createVacante);

router.get('/vacantes', renderVacante);

router.post('/vacantes', filter);


module.exports = router;