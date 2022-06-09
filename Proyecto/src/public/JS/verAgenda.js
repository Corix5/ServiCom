const itemB = document.querySelector('#botonAgendas');

itemB.addEventListener('click', event => {
    
    var id = itemB.dataset.id;
    window.location.href = "/agendas/"+id;
    
});