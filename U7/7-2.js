const addButton = document.getElementById("addBtn");
let name_input = document.getElementById("name_input");
let rednerListe = document.getElementById("rednerListe");

function addRedner(name){
    let li = document.createElement("li");
    //Add name
    li.appendChild(document.createTextNode(name+" "));  //Appends input name

    //Add timer
    let timer = document.createTextNode(new Date(0).toISOString().slice(11, 19)+" ");
    li.appendChild(timer);
    //Add Stop Button
    let button = document.createElement("button");
    button.textContent="Stop!";
    li.appendChild(button);
    rednerListe.appendChild(li);
}
addButton.addEventListener("click", x => {
    addRedner(name_input.value);
    //console.log(name_input.value);
});