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
}
let v1 = new Vorrang([["studieren", "schlafen"],["essen", "prüfen"]]);
console.log(v1.elements);