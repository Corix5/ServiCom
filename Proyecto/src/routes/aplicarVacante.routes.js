const {Router} = require('express');
const router = Router();

const { renderVacanteAceptada, updateAcknowledge} = require('../controllers/aplicarVacante.controller');
const {isAuthenticated} = require('../helpers/auth')

router.get('/vacanteAceptada', isAuthenticated, renderVacanteAceptada);

router.put('/vacanteAceptada', isAuthenticated, updateAcknowledge);

module.exports = router;