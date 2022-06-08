const indexCtrl = {};
const Vacante = require('../models/Vacante');

indexCtrl.renderIndex = async (req, res)=>{

    const {speciality = 'Web Development'} = req.params;

    var query = {speciality: speciality}

    const vacantes = await Vacante.find(query).lean(); 

    //const vacantes = await Vacante.find().lean(); 
    res.render('index',{vacantes})
};

module.exports = indexCtrl;