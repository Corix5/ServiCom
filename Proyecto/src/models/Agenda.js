const{Schema, model} = require('mongoose');

const AgendaSchema = new Schema({
    alumnoId:{type:String},
    fecha:{type:String},
    acti:{type:Array}    
},{
    timestamps: true
});

module.exports = model("Agenda",AgendaSchema);