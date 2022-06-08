const {Router} = require('express');

const router = Router();

const{renderBitacoracreate} = require('../controllers/bitacora.controller');

router.get('/bitacora', renderBitacoracreate);

router.post('/bitacora',);

module.exports = router;