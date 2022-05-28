const vacanteCtrl = {};
const Vacante = require('../models/Vacante');

vacanteCtrl.renderVacanteForm = (req, res) => {
    res.render('vacante/vacanteForm');
}

vacanteCtrl.createVacante = async (req, res) => {
    const {name, description, completeDescription, benefits, activities, noActivities, speciality, company} = req.body;
    const newVacante = new Vacante({name, description, completeDescription, benefits, activities, noActivities, speciality, company});
    await newVacante.save(); 
    res.send('vacante creada');

}
vacanteCtrl.renderVacante = async (req, res)=>{
    const vacantes = await Vacante.find().lean(); 
    res.render('vacante/vacantes', {vacantes});
};

module.exports = vacanteCtrl;