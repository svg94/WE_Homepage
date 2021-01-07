//Same Class but with Proxy Logger
class Vorrang{
    constructor(dependencies) {
        this.deps = dependencies;
        this.elements = this.elementsset();

        this.visited = [];  //Für den Proxy logger um die restlichen Printen zu können.
    }
    addOnVisited(node){
        this.visited.push(node);
    }
    elementsset(){      //Lists all nodes from dependencies
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
        return this.topsort(this.deps,this.elements);
    }
    *[Symbol.iterator](){
        let i = 0;
        const sorted = this.topsort(this.deps,this.elements);
        for(let i=0; i < sorted.length; i++){
            yield sorted[i];
        }
    }
    topsort(relations, elements){
        var inDegree = this.calculate_inDegree(relations, elements);
        //console.log(inDegree);
        var next = [];
        var sortierung = [];

        for(let key in inDegree){
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
            this.addOnVisited(current_item);

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

    calculate_inDegree(relations, elements){
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
}
const handler={
    get: function(target, prop, receiver) {
        if(prop === 'addOnVisited') {
            console.log(target.visited.length+1 + " node(s) have been processed","-",
                target.elements.length - target.visited.length-1 + " nodes left");
        }
        return target[prop];
    }
};

let v1 = new Vorrang([["studieren", "schlafen"],["essen", "prüfen"]]);

const proxyVorrang = new Proxy(v1,handler);
proxyVorrang.sorted();



































const studentenLeben = new Vorrang([ ["schlafen", "studieren"], ["essen", "studieren"], ["studieren", "prüfen"] ]);

for ( const next of studentenLeben ){
    console.log( next );
}

