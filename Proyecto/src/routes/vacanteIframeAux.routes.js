const {Router} = require ('express');
const router = Router();

const {renderiFrameAux} = require('../controllers/vacanteIframeAux.controller');

router.get('/vacante/vacanteIframeAux', renderiFrameAux);
module.exports = router;