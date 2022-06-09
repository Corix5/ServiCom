const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');


const userSchema = new Schema({
    name: {type: String, required: true},
    lastnameP: {type: String, required: true},
    lastnameM: {type: String, required: true},
    ipnID: {type: Number, required: true},
    career: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: Number, required: true, unique: true},
    password: {type: String, required: true},
    acknowledged: {type: Boolean},
    photo: { type: String},
    repository: {type: Array},
    curriculum: {type: String},
    personalDescription: {type: String},
    profession: {type: String},
    calendar: {type: String}

}, {
    timestamps: true
});

userSchema.methods.encyptPassword = async password =>{
   const salt = await bcrypt.genSalt(10);
   return await bcrypt.hash(password, salt);
};

userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = model("User", userSchema);