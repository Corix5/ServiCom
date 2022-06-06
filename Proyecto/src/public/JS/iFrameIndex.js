var iFrameI = document.querySelector('#iframe')

document.querySelectorAll('.oferta').forEach(item => {
    item.addEventListener('click', event => {
      var id = item.id;
      iFrameI.setAttribute('src','/vacantes/'+id)
    })
})