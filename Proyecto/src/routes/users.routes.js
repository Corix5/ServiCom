const {Router} = require('express');
const path = require('path');
const multer = require('multer');
const router = Router();

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img'),
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    } 

});

const upload = multer({storage});

const { renderSignUpForm, renderSigninForm, signin, signup, logout} = require('../controllers/users.controller')

router.get('/users/signup', renderSignUpForm);

router.post('/users/signup', upload.single('photo'), signup);

router.get('/users/signin', renderSigninForm);

router.post('/users/signin', signin);

router.get('/users/logout', logout);

module.exports = router;