const {Router} = require ('express');
const router = Router();

const {renderCarrusel} = require('../controllers/carrusel.controller');

router.get('/principal/carrusel', renderCarrusel);
module.exports = router;