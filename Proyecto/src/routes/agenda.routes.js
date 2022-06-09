const {Router} = require('express');

const router = Router();
const{renderAgendacreate,createAgenda,verAgendas} = require('../controllers/agenda.controller');

router.get('/agendaForm/:id', renderAgendacreate); // obetener algo del servidor

router.post('/agenda-create/:id',createAgenda); 

router.get('/agendas/:id',verAgendas); 

module.exports = router;