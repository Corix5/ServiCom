const userInfoCtrl = {};
const User = require('../models/User');
const Agenda = require('../models/Agenda');
const passport = require('passport');
const { appendFile } = require('fs');

userInfoCtrl.renderUserInfo = async (req, res)=>{
    const users = await User.findOne(req.user).lean();
   // const agenda = await Agenda.findOne()
  //  const id = users._id.toString();

   // const hoy = new Date();
   // const fecha =hoy.getFullYear()+"-0"+(hoy.getMonth()+1)+"-0"+hoy.getDate();

  //  const agendas = await Agenda.find({$and:[{alumnoId:id},{fecha:fecha}]});

    res.render('userInfo/userInfo',{users});
};

module.exports = userInfoCtrl;