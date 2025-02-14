//Square
function square(x){
    let result = x*x;
    return result;

}
let result = square(4);
console.log(result)

//Add
function add (x,y){
    let addition = x+y;
    return addition;
}
let result_2= add(10,20);
console.log(result_2)

//Double
function doubleIt(num){
    let result = num * 2;
    console.log(num,'Double:', result);
}

doubleIt(130) //only calling the function when console in function

const result_3 = doubleIt(125); //using variable and no need to console the function when it is console in function

const money = 140; //using external variable
doubleIt(money);


//Difference
function difference(a,b){
    let diff = a - b;
    console.log('The difference is:',diff);
}
difference(10,5);

let fatherAge = 65;
let myAge= 22;
difference(fatherAge,myAge)

//function using return------> return use korbo jokhon value extract kore use korte hoobe 
function tenTimes(x){
    let result = x*10;
    return result;
    // console.log(result) // after return value console.log will not work because return means function er kaaj shesh and result ber hoye gese.
}
let result_4 = tenTimes(9)
console.log('output',result_4);
let result_4_5 = 5* result_4;
console.log('output',result_4_5) //return output taake kaaje lagano gelo and further useable
