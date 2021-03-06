const {Router} = require('express');
const multer = require('multer');
const upload = require('../server');
const router = Router();

const { renderUserProfileForm, completeProfile} = require('../controllers/userProfile.controller')

router.get('/userProfile/:id', renderUserProfileForm);

router.put('/userProfile/:id', upload.single('photo2'),completeProfile);


module.exports = router;