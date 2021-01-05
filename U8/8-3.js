const bhtml = document.getElementById("bHtml");
const bcss = document.getElementById("bCss");
const bjs = document.getElementById("bJs");
const bother = document.getElementById("bOther");

let leftButtons = [];
for(let i = 0; i < 5; i++){
    leftButtons.push(document.getElementById("bleft"+(i+1)));
}
const paragraph = document.getElementById("mmp");
const source = document.getElementById("source");

let data;
let currentTopic = "";

function fillButtonNames(){
    const topic = this.innerText.toLowerCase();
    for(let i = 0; i < 5; i++){
        //leftButtons[i].innerText = "";
        leftButtons[i].innerText = Object.keys(data[topic])[i];
    }
    currentTopic = topic;
}
function placeContent(){
    let subtopic =this.innerText.toLowerCase();
    if(subtopic === "choose a topic"){
        return;
    }
    paragraph.innerText = data[currentTopic][subtopic]["content"];
    source.innerText = "";
    data[currentTopic][subtopic]["references"].forEach(ref => source.innerText+=ref);
}

async function fetchData(url){
    const data = await fetch(url);
    return await data.json();
}
async function run(){
    data = await fetchData("./data.json");
    console.log(data);
    bhtml.addEventListener("click",fillButtonNames);
    bcss.addEventListener("click",fillButtonNames);
    bjs.addEventListener("click",fillButtonNames);
    bother.addEventListener("click",fillButtonNames);
    leftButtons.forEach(btn => btn.addEventListener("click",placeContent));
}
run();