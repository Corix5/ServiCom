const {Router} = require('express');
const router = Router();

const { renderUserInfo } = require('../controllers/userInfo.controller');

const {isAuthenticated} = require('../helpers/auth')

router.get('/user/userInfo', isAuthenticated, renderUserInfo);
module.exports = router;