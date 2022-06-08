const vacanteCtrl = {};
const { isObjectIdOrHexString } = require('mongoose');
const Vacante = require('../models/Vacante');
const  ObjectID = require('mongodb').ObjectId;

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
   // var id = req.params.compania;
    var query = {_id :new ObjectID(req.params.id)}
    const vacantes = await Vacante.findOne(query); 
    res.render('vacante/vacante', vacantes);
};

module.exports = vacanteCtrl;