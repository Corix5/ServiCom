const {Router} = require('express');

const router = Router();

const{renderBitacoracreate} = require('../controllers/bitacora.controller');

router.get('/principal/bitacora', renderBitacoracreate);

router.post('/principal/bitacora',);

module.exports = router;