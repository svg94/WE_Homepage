const testPage = document.getElementById("testID");
const n = 10000;
let load;

let t0 = performance.now();
load = testPage.innerHTML;
const t_innerHTML = performance.now() - t0;

t0 = performance.now();
load = testPage.innerText;
const t_innerText = performance.now() - t0;

t0 = performance.now();
load = testPage.textContent;
const t_textContent = performance.now() - t0;

t0 = performance.now();
load = testPage.outerHTML;
const t_outerHTML = performance.now() - t0;

t0 = performance.now();
for(let i = 0; i < n; i++){
    load = testPage.innerHTML;
}
const t_BetterInnerHTML = performance.now() - t0;

t0 = performance.now();
for(let i = 0; i < n; i++){
    load = testPage.innerText;
}
const t_BetterInnerText = performance.now() - t0;

t0 = performance.now();
for(let i = 0; i < n; i++){
    load = testPage.textContent;
}
const t_BetterTextContent = performance.now() - t0;

t0 = performance.now();
for(let i = 0; i < n; i++){
    load = testPage.outerHTML;
}
const t_BetterOuterHTML = performance.now() - t0;

document.getElementById('valueInnerHTML').innerText = "" + t_innerHTML.toFixed(2) + "ms";
document.getElementById('valueInnerText').innerText = "" + t_innerText.toFixed(2) + "ms";
document.getElementById('valueTextContent').innerText = "" + t_textContent.toFixed(2) + "ms";
document.getElementById('valueOuterHTML').innerText = "" + t_outerHTML.toFixed(2) + "ms";

document.getElementById('BetterValueInnerHTML').innerText = "" + t_BetterInnerHTML.toFixed(2) + "ms";
document.getElementById('BetterValueInnerText').innerText = "" + t_BetterInnerText.toFixed(2) + "ms";
document.getElementById('BetterValueTextContent').innerText = "" + t_BetterTextContent.toFixed(2) + "ms";
document.getElementById('BetterValueOuterHTML').innerText = "" + t_BetterOuterHTML.toFixed(2) + "ms";

document.getElementById('headerOfBetterTable').innerText = "More interesting results because it's times "+n;
console.log("DONE");

