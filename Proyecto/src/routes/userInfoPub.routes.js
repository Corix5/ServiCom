const {Router} = require('express');
const router = Router();

const { renderUserInfoPub } = require('../controllers/userInfoPub.controller');

router.get('/perfilpub/:id', renderUserInfoPub);
module.exports = router;