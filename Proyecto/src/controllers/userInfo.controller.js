const userInfoCtrl = {};
const User = require('../models/User');
const passport = require('passport');
const { appendFile } = require('fs');

userInfoCtrl.renderUserInfo = async (req, res)=>{
    const users = await User.findOne(req.user).lean(); 
    res.render('userInfo/userInfo', {users});
};

module.exports = userInfoCtrl;