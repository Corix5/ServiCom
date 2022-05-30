const {Schema, model} = require('mongoose');

const vacanteSchema = new Schema({
    name: {type: String},
    company: {type: String},
    description: {type: String},
    completeDescription: {type: String},
    benefits: {type: Array},
    activities: {type: Array},
    noActivities: {type: Array},
    speciality: {type: String},

}, {
    timestamps: true
});

module.exports = model("Vacante", vacanteSchema);