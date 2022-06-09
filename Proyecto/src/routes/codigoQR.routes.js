const {Router} = require ('express');
const router = Router();

const {renderCodigo} = require('../controllers/codigoQR.controller');

router.get('/codigo/:id', renderCodigo);
module.exports = router;