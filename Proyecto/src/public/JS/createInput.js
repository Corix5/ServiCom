function createInputPortafolio(){
    let container = document.getElementById("containerPortafolio");
    let input = document.createElement("input");
    input.type = "text";
    input.name = "repository";
    input.className = "form-control newInput";
    input.placeholder = "Ej: Repositorios de GitHub";
    container.appendChild(input);
}

function createInputAct(){
    let container = document.getElementById("containerAct");
    let input = document.createElement("input");
    input.type = "text";
    input.name = "activities";
    input.className = "form-control";
    input.placeholder = "Activities a realizar";
    container.appendChild(input);
}

function createInputNoAct(){
    let container = document.getElementById("containerNoAct");
    let input = document.createElement("input");
    input.type = "text";
    input.name = "noActivities";
    input.className = "form-control newInput";
    input.placeholder = "Actividades a no realizar";
    container.appendChild(input);
}

function createInputBenefits(){
    let container = document.getElementById("containerBenefits");
    let input = document.createElement("input");
    input.type = "text";
    input.name = "benefits";
    input.className = "form-control newInput";
    input.placeholder = "Beneficios";
    container.appendChild(input);
}