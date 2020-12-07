function identity_function(x){
    return function(){
        return x;
    }
}
function addf(x){
    return function(y){
        return x+y;
    }
}
function applyf(op){
    return function(x){
        return function(y){
            return op(x,y);
        }
    }
}
function curry(op, x){
    return function(y){
        return op(x,y);
    }
}
function add(x,y){
    return x+y;
};
function addfInc(x){
    return function(){
        return x+1;
    }
}
function methodize(op){
    return function(y){
        return op(this,y);
    }
}
function demethodize(op){
    return function (x,y){
        //return x.op(y);
        return 0;
    }
}
function twice(op){
    return function(x){
        return op(x,x);
    }
}
function composeu(op1,op2){
    return function(x){
        return op2(op1(x));
    }
}
function composeb(op1,op2) {
    return function (x, y, z) {
        return op2(op1(x, y), z);
    }
}
function mult(x,y){
    return x*y;
}
var once = (function (){        //Closure
   var execution = false;
   return function(op){
       if(!execution){
           execution = true;
           return function(x,y){
               return op(x,y);
           };
       }else{
           throw "Error. Tried more than once.";
       }
   }
}());
var counterf =(function (x){
    var counter = x;
    return {
        inc : function(){
            return ++counter;
        },
        dec : function(){
            return --counter;
        }
    };
});
var revocable = (function(action){
    var revoked = false;
    return{
        invoke: function(x){
          if(revoked){
              throw "Error. Revoked"
          }
          return action(x);
        },
        revoke: function (){
            revoked = true;
        }

    };
});
var wrapper = (function(){
    var arr = [1,2,3];
    return{
        get: function(){
            return arr;
        },
        store: function(toStore){
            arr.push(toStore);
        },
        append: function(toStore){
            arr.push(toStore);
        }
    }
});


var stuff = revocable(console.log);
stuff.invoke(7);
stuff.revoke();
stuff.invoke(8);

Number.prototype.add = methodize(add);
//console.log((3).add(4));
//console.log(demethodize(Number.prototype.add)(0,2));
var double = twice(add);
var square=twice(mult);
console.log(once(add)(2,3));
//console.log(once(add)(2,3));
//console.log(once());
let ctr = counterf(20);
console.log(ctr.inc());
console.log(ctr.dec());
console.log(composeu(double,square)(3));
console.log(composeb(add,mult)(2,3,5));
//console.log(double(11));
//console.log(curry(add,5)(6));