const aplicarVacanteCtrl = {};

const passport = require('passport');

const User = require('../models/User');
const nodemailer = require('nodemailer');

aplicarVacanteCtrl.renderVacanteAceptada = async (req, res) => {
    res.send('Usuario aceptado');
};

aplicarVacanteCtrl.updateAcknowledge = async (req, res) =>{
   
    await User.findOneAndUpdate(req.user, {acknowledged:true});
    res.send('Usuario aceptado');  
};

module.exports = aplicarVacanteCtrl;