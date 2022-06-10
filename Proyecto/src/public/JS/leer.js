const itemL = document.querySelector('#botonLectura');


itemL.addEventListener('click', event => {
    leer(document.getElementById("textoAgenda").textContent);
  
});

function leer(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
}