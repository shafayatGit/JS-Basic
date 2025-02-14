//Odd Even
function oddEven(num){
    if(num%2===0){
        let result = 'Even';
        return result;
    }
    else{
        let result = 'Odd';
        return result;
    }
}
let result = oddEven(10);
console.log(result)
let result_2 = oddEven(11);
console.log(result)


//Another way ----> shorter way
function isOdd(a){
    if(a%2===1){
        return 'odd';
    }
    return 'even'
}
console.log(isOdd(11)) //another way to call directly



//Addition
function add ( x, y){
    return x + y; // kono variable charai direct return.
}
let total = add(10,15);
console.log(total)


//Math
function doMath(a , b){
    let sum = a + b;
    let subtraction = a - b;
    let multiply = sum * subtraction;
    let result = multiply /2;
    return result; 
}
let result_3 = doMath(20,10)
console.log(result_3)