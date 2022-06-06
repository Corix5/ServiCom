const {Router} = require('express');
const router = Router();

const { renderVacanteForm, renderVacante, createVacante} = require('../controllers/vacante.controller')

router.get('/vacantes/add', renderVacanteForm);

router.post('/vacantes/add', createVacante);

//Lo que se debe borrar
router.get('/vacantes/:id', renderVacante);

module.exports = router;