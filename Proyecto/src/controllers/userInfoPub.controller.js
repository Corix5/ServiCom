const userInfoPubCtrl = {};
const User = require('../models/User');
const  ObjectID = require('mongodb').ObjectId;


userInfoPubCtrl.renderUserInfoPub = async (req, res)=>{

    var query = {_id :new ObjectID(req.params.id)}
    const users = await User.findOne(query); 
    res.render('userInfo/userInfoPub', users);
};

module.exports = userInfoPubCtrl;