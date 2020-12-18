const addButton = document.getElementById("addBtn");
let name_input = document.getElementById("name_input");
let rednerListe = document.getElementById("rednerListe");   //Unordered HTML List <ul>

let allRedner = [];
let curr_redner;

function refreshTime(){
    if(curr_redner in window){
        return;
    }else{
        curr_redner.sek += timerStep;
        curr_redner.time.textContent = new Date(curr_redner.sek).toISOString().slice(11, 19)+" ";
    }
}
const timerStep = 1000;
let timer = setInterval(refreshTime, timerStep);

function addRedner(name){
    let li = document.createElement("li");
    //Add name
    let domName = document.createTextNode(name+" ");
    li.appendChild(domName);

    //Add timer
    let timer = document.createTextNode(new Date(0).toISOString().slice(11, 19)+" ");
    li.appendChild(timer);
    //Add Stop Button
    let button = document.createElement("button");
    button.textContent="Stop!";
    button.addEventListener("click", x => {
        ToggleStop(domName);
    });
    li.appendChild(button);
    rednerListe.appendChild(li);
    allRedner.push({    //Creating json object for important references
        name: domName,
        time: timer,
        start: 0,
        sek: 0,
        btn: button,
    });
    if(curr_redner){ ToggleStop(curr_redner.name)};
    curr_redner = allRedner[allRedner.length-1];

    name_input.value = "";
}
addButton.addEventListener("click", x => {
    addRedner(name_input.value);
});
function ToggleStop(domName){
    if(curr_redner && domName !==curr_redner.name){
        curr_redner.btn.innerHTML = "Start!"
        curr_redner = undefined;
        curr_redner = allRedner.find((r)=>r.name=== domName);
        curr_redner.btn.innerHTML = "Stop!"
    }else if(curr_redner){
        curr_redner.btn.innerHTML = "Start!"
        curr_redner = undefined;
    }else if(!curr_redner){
        curr_redner = allRedner.find((r)=>r.name=== domName);
        curr_redner.btn.innerHTML = "Stop!"
    }
}