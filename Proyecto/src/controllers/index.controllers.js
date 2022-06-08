const indexCtrl = {};
const Vacante = require('../models/Vacante');

indexCtrl.renderIndex = async (req, res)=>{
    res.render('index')
};

module.exports = indexCtrl;