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

   var mes;
   var dia;
   
   if(hoy.getMonth()>8){
      mes=(hoy.getMonth()+1);
   }else{
      mes="0"+(hoy.getMonth()+1);
   }

   if(hoy.getDate()>9){
      dia=hoy.getDate();
   }else{
      dia="0"+hoy.getDate();
   }

   const fechaf =hoy.getFullYear()+"-"+mes+"-"+dia;
   const query = {alumnoId: id,fecha: fechaf};
   const agendas = await agenda.find(query).lean();
   res.render('agenda/agendas',{agendas});
};

module.exports = agendaCtrl;