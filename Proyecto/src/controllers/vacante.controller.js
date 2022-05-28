const vacanteCtrl = {};
const { render } = require('express/lib/response');
const Vacante = require('../models/Vacante');

vacanteCtrl.renderVacanteForm = (req, res) => {
    res.render('vacante/vacanteForm');
}

vacanteCtrl.createVacante = async (req, res) => {
    const {name, description, completeDescription, benefits, activities, noActivities, speciality, company, candidates} = req.body;
    const newVacante = new Vacante({name, description, completeDescription, benefits, activities, noActivities, speciality, company, candidates});
    await newVacante.save(); 
    res.send('vacante creada');

}

vacanteCtrl.renderVacante = async (req, res)=>{
    const vacantes = await Vacante.find().lean(); 
    res.render('vacante/vacantes', {vacantes});
};

vacanteCtrl.filter = async (req, res) => {
    const {speciality, filter1, filter2} = req.body;
    res.render('index');
}




module.exports = vacanteCtrl;