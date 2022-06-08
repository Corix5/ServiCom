const{Schema, model} = require('mongoose');

const bitacoraSchema = new Schema({
    fecha:{type:String},
    hrscum:{type:String},
    acti:{type:Array}    
},{
    timestamps: true
});

module.exports = model("Bitacora",bitacoraSchema);