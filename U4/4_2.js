var Person ={
    getAuto: function(){
        return "Mein Auto: "+this.auto.name;
    }
};
var Auto ={
    name: ""
};
function conflict(car){
    var ctr=0;

}
var car1={
    __proto__: Auto
};
car1.name = "Benzer";
var p1 = {
    __proto__: Person,
    auto: car1
};