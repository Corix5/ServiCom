const renderVerVacanteCtrl = {};
const Vacante = require('../models/Vacante');

renderVerVacanteCtrl.renderVerVacante = async (req, res)=>{

    const {speciality = 'Web Development'} = req.params;

    var query = {speciality: speciality}

    const vacantes = await Vacante.find(query).lean(); 

    //const vacantes = await Vacante.find().lean(); 
    res.render('vacante/vervacantes',{vacantes})
};

module.exports = renderVerVacanteCtrl;