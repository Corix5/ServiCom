const indexCtrl = {};
const Vacante = require('../models/Vacante');

indexCtrl.renderIndex = async (req, res)=>{
    const vacantes = await Vacante.find().lean(); 
    res.render('index',{vacantes})
};


module.exports = indexCtrl;