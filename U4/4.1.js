function identity(x){
    return x;
}
function identity_function(x){
    return function(){
        return x;
    }
}
function add(x,y){
    return x+y;
}
function mul(x,y){
    return x*y;
}
function addf(x){
    return function(y){
        return x+y;
    }
}
function applyf(op){
    return addf();
}
function applyf(op){
    return function(x){
        return function (y){
            return op(x,y);
        }
    }
}