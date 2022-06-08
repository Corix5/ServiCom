const {Router} = require('express');

const router = Router();

const{renderBitacoracreate} = require('../controllers/bitacoracreate.controller');

router.get('/bitacoracreate', renderBitacoracreate);

router.post('/bitacoracreate',);

module.exports = router;