const itemA = document.querySelector('#botonAgenda');

itemA.addEventListener('click', event => {
    
    var id = itemA.dataset.id;
    window.location.href = "/agendaForm/"+id;
    
});