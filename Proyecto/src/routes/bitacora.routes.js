const {Router} = require('express');

const router = Router();

const{renderBitacoracreate} = require('../controllers/bitacora.controller');

router.get('/bitacoraform', renderBitacoracreate);

router.post('/bitacora',);

module.exports = router;