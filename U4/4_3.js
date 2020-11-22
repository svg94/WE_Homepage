function fibonacciRec(num){        //Recursive  Time complexity O(2^n)  space complexity O(n)
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}
function fibonacci(n){             //Iterative, better performance O(n)  space complexity: constant
    var i;
    var a =0, b=1, tmp;
    console.log(b);
    for(i =0; i < n-1; i++){
        tmp = b;
        b = a+b;
        a = tmp;
        console.log(b);
    }
}
function fibonacciWithTable(n){
    var i;
    var a =0, b=1, tmp;
    var body = document.body,
        tbl  = document.createElement('table');
    tbl.style.width  = '20%';
    tbl.style.border = '1px solid black';
    var tr = tbl.insertRow();
    var td = tr.insertCell();
    td.appendChild(document.createTextNode('Fibonacci'));
    td.style.border = '1px solid black';
    var tr = tbl.insertRow();
    var td = tr.insertCell();
    td.appendChild(document.createTextNode('1'));
    td.style.border = '1px solid black';

    for(i =0; i < n-1; i++){
        tmp = BigInt(b);
        b = BigInt(a+b);
        a = BigInt(tmp);
        var tr = tbl.insertRow();
        var td = tr.insertCell();
        td.appendChild(document.createTextNode(''+b));
        td.style.border = '1px solid black';
    }
    body.appendChild(tbl);
}