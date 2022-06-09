const item = document.querySelector('#botonQR');


item.addEventListener('click', event => {
    
    var id = item.dataset.id;
    window.location.href = "/codigo/"+id;
    
});




