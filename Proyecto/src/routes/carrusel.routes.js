const {Router} = require ('express');
const router = Router();

const {renderCarrusel} = require('../controllers/carrusel.controller');

router.get('/carrusel', renderCarrusel);
module.exports = router;