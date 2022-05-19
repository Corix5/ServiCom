const checkbox = document.querySelector('#flexSwitchCheckDefaultDarkMode');

checkbox.addEventListener("change", comprueba, false);

function comprueba(){
  if(checkbox.checked){
      console.log("true");
      document.body.style.backgroundColor = '#212F3D';
      document.getElementById("msgArea").style.backgroundColor = '#18222B';
      document.getElementById("title").style.color = 'white';
      document.getElementById("iframe").style.boxShadow = "2px -2px 5px 5px #374C5E";

      document.getElementById("selectorColor").style.backgroundColor = '#18222B';
      document.getElementById("selectorColor").style.borderColor = '#18222B';
      document.getElementById("selectorColor").style.color = 'white';

      document.getElementById("msg").style.color = "white";
      document.getElementById("label1").style.color = "white";
      document.getElementById("label2").style.color = "white";
  }else{
     console.log("false");
     document.body.style.backgroundColor = 'rgb(248, 248, 248)';
     document.getElementById("msgArea").style.backgroundColor = 'white';
     document.getElementById("title").style.color = 'black';
     document.getElementById("iframe").style.boxShadow = "2px -2px 5px 5px rgba(0, 46, 65, 0.164)";

     document.getElementById("selectorColor").style.backgroundColor = 'white';
     document.getElementById("selectorColor").style.borderColor = 'black';
     document.getElementById("selectorColor").style.color = 'black';

     document.getElementById("msg").style.color = "black";
     document.getElementById("label1").style.color = "black";
     document.getElementById("label2").style.color = "black";
  }
};

