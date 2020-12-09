let textString ="\n" +
    "Plagiatsresolution und -maßnahmen\n" +
    "\n" +
    "Resolution zum akademischen Ethos und zu den akademischen Standards\n" +
    "\n" +
    "In guter Tradition und anlässlich der öffentlichen Diskussion zum Plagiatsthema sieht sich die Hochschule Bonn-Rhein-Sieg in der Pflicht, ihre Position klar und eindeutig zu bekunden und hochschulweit Maßnahmen einzuleiten.\n" +
    "\n" +
    "1. Die Hochschule Bonn-Rhein-Sieg bekennt sich mit dieser Resolution öffentlich zum akademischen Ethos und den akademischen Standards.\n" +
    "\n" +
    "2. Die Hochschule Bonn-Rhein-Sieg sieht sich verpflichtet, alle Studierende frühzeitig im Studium sowohl über den wissenschaftlichen Auftrag und den akademischen Ethos als auch über die Konsequenzen seiner Missachtung aufzuklären. In allen Studiengängen wird intensiv in die wissenschaftliche Arbeits- und Denkweise eingeführt und über den akademischen Ethos und die akademischen Standards klar und eindeutig aufgeklärt.\n" +
    "\n" +
    "3. In einer Selbstverpflichtungserklärung zum akademischen Ethos geben alle Studierende der Hochschule Bonn-Rhein-Sieg spätestens gegen Ende des ersten Studienjahres zum Ausdruck, dass sie sich von den Dozentinnen und Dozenten der Hochschule Bonn-Rhein-Sieg hinreichend über den akademischen Ethos und die akademischen Standards aufgeklärt sind und diese beachten werden.\n" +
    "\n" +
    "Der Senat befürwortete in seiner Sitzung am 03.05.2012 die Resolution in der o.g. Fassung.\n" +
    "\n" +
    "Eckpunkte zur Plagiatsprüfung\n" +
    "\n" +
    "Der Senat empfiehlt:\n" +
    "\n" +
    "1. Die Aufklärung und das Bekenntnis zum akademischen Ethos und den akademischen Standards muss fester Bestandteil aller Curricula aller Studiengänge im ersten Studienjahr sein. Alle Curricula aller Studiengänge werden darauf hin geprüft und ggfs. ergänzt.\n" +
    "\n" +
    "2. Alle Abschlussarbeiten werden auf Plagiate geprüft.\n" +
    "\n" +
    "3. Alle Abschlussarbeiten mit Plagiaten werden grundsätzlich als Fehlversuch gewertet.\n" +
    "\n" +
    "4. Die Entscheidung, ob die Arbeit Plagiate enthält, liegt zuerst bei den Gutachterinnen und Gutachtern. Der Nachweis in einem Gutachten reicht.\n" +
    "\n" +
    "5. Alle Abschlussarbeiten werden grundsätzlich auch in elektronischer Form (PDF-Format und Originalformat wie Word, OpenOffice, ...) eingereicht.\n" +
    "\n" +
    "6. Alle Abschlussarbeiten ohne Sperrvermerk werden einem vom Fachbereich definierten Kreis zur Einsicht zur Verfügung gestellt. Alle Abschlussarbeiten sollten nach Möglichkeit grundsätzlich zur Veröffentlichung freigegeben werden. Wissenschaft zielt auf Veröffentlichung ab. Nichtveröffentlichung sollte nur in begründeten und durch den Prüfungsausschuss genehmigten Ausnahmefällen geschehen.\n" +
    "\n" +
    "7. Im Bereich von Seminar-, Hausarbeiten und Praktikumsberichten behält sich die Hochschule stichprobenartige Plagiatsprüfungen vor.\n" +
    "\n" +
    "Selbstverpflichtungserklärung der Studierenden:\n" +
    "\n" +
    "Eine akademische Arbeit stellt eine individuelle Leistung dar, die eigenständig und allein auf Basis der im Literaturverzeichnis angegebenen Quellen erstellt wurde und in der alle Zitate als solche gekennzeichnet sind.\n" +
    "\n" +
    "\"Ich erkläre hiermit, dass ich den akademischen Ehrencodex kenne und über die Folgen einer Missachtung oder Verletzung aufgeklärt worden bin.\"\n";
let blacklist=["\nPlagiatsresolution"];
/*function mostCommonWords(str,blacklist){
    let strArray=[];
    let ctr =0;
    let pr = new Promise(function(resolve){
        console.log("1");
        strArray = str.split(" ");
        setTimeout(x=>{resolve();},200);
    });
    pr.then(function (){
        console.log("2");
        strArray.forEach(word =>{str = str.replace("P", "AAAAAAAAAAA");});
        //strArray.filter((str)=>{return !blacklist.includes(str)}).map((str)=>{str.replace( /[\r\n]+/gm, ""); ++ctr;});
    });
    pr.then(function (){console.log(ctr);console.log(strArray);});
    return strArray;
}
let str = mostCommonWords(textString,blacklist);
//console.log(mostCommonWords(textString,blacklist));
//console.log(splitThat(textString," "));
//mostCommonWords(textString,blacklist);
//mostCommonWords().then(console.log);
//console.log(mostCommonWords(textString, blacklist));*/
function mostCommonWords(str, blacklist){
    let strArr = str.split(" ");
    let wordlist = [];
    let counterlist = {};
    let max=[];
    new Promise((resolve)=>{strArr.filter((str)=>{return !blacklist.includes(str)}).map(str => {str.replace("\n","");}).forEach(word =>{
        if(wordlist.includes(word)){
            counterlist[word] +=1;
        }else{
            wordlist.push(word);
            counterlist[word] = 0;
        }
    });
    resolve(strArr);
    }).then(function (value){
        for(let i = 0; i< 3; i++){
            let tmp = Math.max(...counterlist);     //Geht wahrscheinlich auch mit reduce..
            max.push(tmp);
            counterlist.slice(counterlist[tmp],1);
        }
    });

    return max;
}