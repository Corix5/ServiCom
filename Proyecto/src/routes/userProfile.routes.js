const {Router} = require('express');
const router = Router();

const { renderUserProfileForm, completeProfile} = require('../controllers/userProfile.controller')

router.get('/userProfile/:id', renderUserProfileForm);

router.put('/userProfile/:id', completeProfile);

module.exports = router;