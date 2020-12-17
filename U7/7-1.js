const testPage = document.getElementById("testID")

let t0 = performance.now();
let load = testPage.innerHTML;
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

document.getElementById('valueInnerHTML').innerText = "" + t_innerHTML.toFixed(2) + "ms";
document.getElementById('valueInnerText').innerText = "" + t_innerText.toFixed(2) + "ms";
document.getElementById('valueTextContent').innerText = "" + t_textContent.toFixed(2) + "ms";
document.getElementById('valueOuterHTML').innerText = "" + t_outerHTML.toFixed(2) + "ms";
console.log("DONE");
