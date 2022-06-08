var iFrameI = document.querySelector('#iframe');
var anchoVentana = window.innerWidth;

document.querySelectorAll('.oferta').forEach(item => {
    item.addEventListener('click', event => {
      var id = item.id;
      if(anchoVentana>1100){
      iFrameI.setAttribute('src','/vacantes/'+id);
      }else{
        window.location.href = "/vacantes/"+id;
      }
    })
})
