const userProfileCtrl = {};
const User = require('../models/User');

userProfileCtrl.renderUserProfileForm = async (req, res)=>{
    const users = await User.findById(req.params.id).lean();
    res.render('userProfile/userProfileForm', {users});
};

userProfileCtrl.completeProfile = async (req, res) =>{

    const {nombre, apellidoPaterno, apellidoMaterno, boleta, carrera, correo, telefono, photo, profession, repository, curriculum, personalDescription} = req.body;

    const newUser = new User({name: nombre, lastnameP: apellidoPaterno, lastnameM: apellidoMaterno, ipnID: boleta, career: carrera, phone: telefono, email:correo, photo, profession, repository, curriculum, personalDescription});
    await User.findByIdAndUpdate(req.params.id, {name: newUser.name, lastnameP:newUser.lastnameP, lastnameM: newUser.lastnameM, ipnID: newUser.ipnID, career: newUser.career, phone: newUser.phone, email:newUser.email, photo: newUser.photo, profession: newUser.profession, repository:newUser.repository, curriculum:newUser.repository, personalDescription: newUser.personalDescription});

    res.redirect('/users/signin');
};

module.exports = userProfileCtrl;