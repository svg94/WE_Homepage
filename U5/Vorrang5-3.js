//Same Class but with generator instead naked iterator
class Vorrang{
    constructor(dependencies) {
        this.deps = dependencies;
        this.elements = this.elementsset();

    }
    elementsset(){
        var elementList = [];
        this.deps.forEach((dep) =>{
            dep.forEach((el) =>{
                if(!elementList.includes(el)){
                    elementList.push(el);
                }
            })
        });
        return elementList;
    }
    sorted(){
        return topsort(this.deps,this.elements);
    }
    *[Symbol.iterator](){
        let i = 0;
        const sorted = topsort(this.deps,this.elements);
        for(let i=0; i < sorted.length; i++){
            yield sorted[i];
        }
    }
}
let v1 = new Vorrang([["studieren", "schlafen"],["essen", "prüfen"]]);
//console.log(v1.elements);
console.log(v1.sorted());
for (const element of v1){
    console.log(element);
}

function topsort(relations, elements){
    var inDegree = calculate_inDegree(relations, elements);
    //console.log(inDegree);
    var next = [];
    var sortierung = [];

    for(key in inDegree){
        if(inDegree[key].degree === 0){
            next.push(key);
        }
    }

    var k=1;

    if(next.length === 0){
        return -2;
    }

    do{
        var current_item = next.pop();
        sortierung.push(current_item);
        k+=1;
        inDegree[current_item].nachfolger.forEach(function(item){
            if(inDegree[item].degree > 1){
                inDegree[item].degree -= 1;
            }else{
                next.push(item);
            }
        })
    } while(next.length !== 0);

    //Zyklus erkannt
    if(k !== elements.length+1){
        return -1;
    }
    return sortierung;
}

function calculate_inDegree(relations, elements){
    var inDegree = {};
    elements.forEach(function(item){
        inDegree[item] = {name: item, degree:0, nachfolger:[]};
    })

    relations.forEach(function(items){
        inDegree[items[1]].degree +=1;
        if(!inDegree[items[0]].nachfolger.includes(items[1])){
            inDegree[items[0]].nachfolger.push(items[1]);
        }
    })

    return inDegree;
}