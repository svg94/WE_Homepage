let topButtons = [];
for(let i=0; i< 10; i++){
    topButtons.push(document.getElementById("e"+(i+1)))
}
topButtons.push(document.getElementById("eExtras"));

let leftButtons = [];
for(let i = 0; i < 5; i++){
    leftButtons.push(document.getElementById("bleft"+(i+1)));
}
let h1mid = document.getElementById("h1mid");
let midButton = document.getElementById("midB");
const questionsSet = [];
const answersSet = [];
for(let i = 0; i < 10; i++){
    questionsSet.push(document.createElement("P"));
    answersSet.push(document.createElement("P"));
    document.getElementById("middleMain").appendChild(questionsSet[i]);
    document.getElementById("middleMain").appendChild(answersSet[i]);
    questionsSet[i].classList.add("mmp");
    answersSet[i].classList.add("mmp");
}
const source = document.getElementById("source");

let data;
let currentExercise = "";
let currentPage = "./";     //Maybe change to ./bsavic2s/ at launch

function fillButtonNames(){
    let samepage = currentExercise[currentExercise.length-1] === this.id[this.id.length-1];
    if(!samepage){
        removeMiddleContent();
    }
    const exercise = "exercise "+this.innerText[this.innerText.length-1];
    console.log(exercise);
    let len = Object.keys(data[exercise]).length;
    leftButtons.forEach(btn =>{
        btn.innerText = "";
        btn.style.display = "none";
    });
    for(let i = 0; i < len; i++){
        leftButtons[i].innerText = Object.keys(data[exercise])[i];
        leftButtons[i].style.display = "inline-block";
    }
    currentExercise = exercise;
}
function placeContent(){
    let subtopic =this.innerText.toLowerCase();
    removeMiddleContent();
    //questionp.innerText = data[currentExercise][subtopic]["content"]["question"];
    h1mid.innerText = subtopic;
    let questions = data[currentExercise][subtopic]["content"]["questions"];
    let answers = data[currentExercise][subtopic]["content"]["answers"];
    for(let i =0; i< questions.length; i++){
        questionsSet[i].innerHTML += "<b>"+questions[i]+"</b>";
        answersSet[i].innerText += answers[i]+"\r\n\r\n";
    }

    data[currentExercise][subtopic]["references"].forEach(ref => source.innerText+=ref);
    if(data[currentExercise][subtopic]["solutionpage"] !== ""){
        midButton.style.display = "inline-block";
        currentPage = data[currentExercise][subtopic]["solutionpage"];
    }
}
function visitPage(){
    window.open(currentPage, "_self");
}
function removeMiddleContent(){
    h1mid.innerText = "";
    midButton.style.display = "none";
    currentPage = "";
    questionsSet.forEach(p=>p.innerHTML="");
    answersSet.forEach(p=>p.innerText="");
    source.innerText = "";
}

async function fetchData(url){
    const data = await fetch(url);
    return await data.json();
}
async function run(){
    //data = await fetchData("./Homepage/IndexStatic/data.json");
    data = await fetchData("./data.json");
    topButtons.forEach(btn =>btn.addEventListener("click", fillButtonNames));
    leftButtons.forEach(btn => {
        btn.addEventListener("click",placeContent);
        btn.style.display = "none";
    });
    midButton.addEventListener("click", visitPage);
}
run();