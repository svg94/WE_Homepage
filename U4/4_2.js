/*var Person ={
    getAuto: function(){
        return "Mein Auto: "+this.auto.name;
    }
};*/
function Person(autos, name){
    this.getAutos = autos,
    this.name = name
}
function Auto(marke, id){
    this.marke = marke,
    this.id = id;
}

function conflict(car){
    var ctr=0;
    return true;
}
