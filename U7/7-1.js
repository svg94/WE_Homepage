const testPage = document.getElementById("testID");
const n = 100000;

let dataMap = new Map(); //key value pair of DOM-ID and performanceTest (id,speed)
let domIDs = ["valueInnerHTML","valueInnerText","valueTextContent","valueOuterHTML","BetterValueInnerHTML","BetterValueInnerText","BetterValueTextContent","BetterValueOuterHTML"];
let elementProps = ["innerHTML","innerText","textContent","outerHTML"];
function performanceTest(page, elProp, n=1){
    let load;
    const t0 = performance.now();
    for(let i = 0; i< n; i++){
        load = page[elProp];
    }
    const time = performance.now() - t0;
    return time;
}

for(let i =0; i<4; i++){
    dataMap.set(domIDs[i],performanceTest(testPage,elementProps[i]));
}
for(let i =4; i<8; i++){
    dataMap.set(domIDs[i],performanceTest(testPage,elementProps[i%4],n));
}
for(let entry of dataMap){
    document.getElementById(entry[0]).innerText = ""+entry[1].toFixed(2)+"ms";
}

document.getElementById('headerOfBetterTable').innerText = "More interesting results because it's times "+n;
console.log("DONE");
