const agendaCtrl = {};

const agenda= require('../models/Agenda');
//const  ObjectID = require('mongodb').ObjectId;
 
agendaCtrl.renderAgendacreate = (req, res) =>{
    var id_alum = req.params.id;

    const idGenerado = {id: id_alum};

     res.render('agenda/agendaform',{idGenerado});
};


agendaCtrl.createAgenda = async (req, res) =>{
    const id = req.params.id;
    const{fecha,actBitacora}=req.body;
    const newagenda = new agenda({alumnoId: id,fecha:fecha , acti: actBitacora});
    await newagenda.save();
 //   console.log(newbitacora);
    res.send("Agenda creada");
 // res.render('index');
};


agendaCtrl.verAgendas = async (req, res) =>{
   const id = req.params.id;

   const hoy = new Date();
   const fecha =hoy.getFullYear()+"-0"+(hoy.getMonth()+1)+"-0"+hoy.getDate();
   const agendas = await agenda.find({$and:[{alumnoId:id},{fecha:fecha}]});

   res.render('agenda/agendas',{agendas});
};

module.exports = agendaCtrl;