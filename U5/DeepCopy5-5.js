

//ES6 deep copy
let deepCopy = (struct) => {return Object.fromEntries(Object.entries(struct));}


/*
* Deep Copy Tests nach Arrange, Act, Assert
* */
//arrange (build object)
let toCopy ={
    one: 1,
    two: [1,2],
    three: [1,2,3],
    twotwo: [[1,2],[1,2]],
    twotwotwo: [[[1],[2]],[[1],[2]]],
    obj: {
        a: [1,2,3,4]
    }
}
//act (execute the function that will be tested.)
shouldBeDeepCopied = deepCopy(toCopy);

//assert
console.assert(toCopy !== shouldBeDeepCopied); //shouldnt be the same object

console.log("Not copied object \n", toCopy);
console.log("deepCopied object: \n", shouldBeDeepCopied);

function checkForContentEquality(array2D_1,array2D_2){     //For 2D-Arrays
    result = true;
    for(let i=0; i < array2D_1.length; i++){
        for(let j=0; j <array2D_2.length; j++){
            if(array2D_1[i][j] !== array2D_2[i][j]){
                result = false;
                return result;
            }
        }
    }
    return result;
}
console.log("Check deeper Arrays:", toCopy.twotwotwo[0]);
console.log("Check deeper Arrays:", shouldBeDeepCopied.twotwotwo[0]);
console.assert(checkForContentEquality(toCopy.twotwotwo[0],shouldBeDeepCopied.twotwotwo[0]));