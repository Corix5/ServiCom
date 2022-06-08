const {Router} = require('express');

const router = Router();

const{renderBitacoracreate, createBitacora,renderListBitacoras, renderEditBitacora, updateBitacora, deleteBitacora} = require('../controllers/bitacora.controller');

//new note
router.get('/principal/bitacora', renderBitacoracreate); // obetener algo del servidor

router.post('/principal/bitacora-create',createBitacora); // Recibir datos desde el servidor 

//Obtener todas las bitacoras

router.get('/principal/bitacora/verbitacoras', renderListBitacoras); 

//Editar todas las notas

router.get('/principal/bitacora/edit/id:', renderEditBitacora );

router.put('/principal/bitacora/edit/id:', updateBitacora ); 

//Elminar bitacora

router.delete('/principal/bitacora/delete/id:', deleteBitacora);


module.exports = router;
