const bitacoraCtrl = {};

const bitacora = require('../models/bitacora');
 
bitacoraCtrl.renderBitacoracreate = (req, res) =>{
    res.render('bitacora/bitacoraform');
}

bitacoraCtrl.createBitacora = async (req, res) =>{
    const{fecha,hrsCum,actBitacora}=req.body;
    const newbitacora = new bitacora({fecha:fecha , hrscum: hrsCum,acti: actBitacora});
    await newbitacora.save();
    console.log(newbitacora);
    res.redirect('/principal/bitacora/listbitacoras');
}

bitacoraCtrl.renderListBitacoras = async (req ,res) =>{
    const bitacoras = await bitacora.find().lean();
    res.render('bitacora/bitacoralist', {bitacoras});

} 

bitacoraCtrl.renderEditBitacora = (req , res) => {
    res.send('formulario Editar Bitacora');
}

bitacoraCtrl.updateBitacora = (req, res) =>{
    res.send('Actualizar bitacora');
}

bitacoraCtrl.deleteBitacora = (req, res) =>{
    res.send('Eliminar bitacora');
}

 

module.exports = bitacoraCtrl;