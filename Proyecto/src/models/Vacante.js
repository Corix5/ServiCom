const {Schema, model} = require('mongoose');

const vacanteSchema = new Schema({
    name: {type: String},
    company: {type: String},
    description: {type: String},
    completeDescription: {type: String},
    benefits: {type: String},
    activities: {type: String},
    noActivities: {type: String},
    speciality: {type: String},
    candidates: {type: Number}

}, {
    timestamps: true
});

module.exports = model("Vacante", vacanteSchema);