const userProfileCtrl = {};
const User = require('../models/User');
const passport = require('passport');
const { appendFile } = require('fs');

userProfileCtrl.renderUserProfileForm = async (req, res)=>{
    res.render('userProfile/userProfileForm');
};

userProfileCtrl.completeProfile = async (req, res) =>{
    const {photo, profession, repository, curriculum, personalDescription} = req.body;

    const newUser = new User({photo, profession, repository, curriculum, personalDescription});
    const user = req.user;
    await user.save();
    res.redirect('/userInfo');  
};

module.exports = userProfileCtrl;