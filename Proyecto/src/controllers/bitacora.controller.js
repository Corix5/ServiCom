const bitacoraCtrl = {};
 
bitacoraCtrl.renderBitacoracreate = (req, res) =>{
    res.render('bitacora/bitacoraform');
}

bitacoraCtrl.createBitacora = (req, res) =>{
    console.log(req.body);
    res.send('Crea nueva bitacora.');
}

bitacoraCtrl.renderListBitacoras = (req ,res) =>{
    res.send('Lista de bitacoras.');
} 

bitacoraCtrl. renderEditBitacora = (req , res) => {
    res.send('formulario Editar Bitacora');
}

bitacoraCtrl.updateBitacora = (req, res) =>{
    res.send('Actualizar bitacora');
}

bitacoraCtrl.deleteBitacora = (req, res) =>{
    res.send('Eliminar bitacora');
}

 

module.exports = bitacoraCtrl;