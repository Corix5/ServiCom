const {Router} = require("express");
const router = Router();

const {renderVerVacante} = require('../controllers/vervacantes.controller')
//router.get('/', renderIndex);
router.get('/vervacantes/:speciality?', renderVerVacante);


module.exports = router;
