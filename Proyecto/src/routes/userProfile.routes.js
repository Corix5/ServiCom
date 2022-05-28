const {Router} = require('express');
const router = Router();

const { renderUserProfileForm, completeProfile} = require('../controllers/userProfile.controller')

router.get('/userProfile/userProfileForm', renderUserProfileForm);

router.post('/userProfile/userProfileForm', completeProfile);

module.exports = router;