//Array length
function arrayLength(array){
    // console.log(array)
    let len = array.length;
    if(len%2===0){
        return 'Even Index'
    }
    return 'Odd Index';    
}
let array = arrayLength([5, 10, 11, 13, 17, 19, 14])
console.log(array)



//Sum of an Array
function arraySum(array){
    // console.log(array)
    let sum = 0;
    

    //using for of
    // for(let arr of array){
    //     sum = sum + arr;
    // }
    // return sum


    //using for loop
    for(let i = 0 ; i<array.length ; i++){
        // console.log(array[i])
        sum = sum + array[i]
    }
    return sum;
    
    
}
let sum = arraySum([10, 20, 30, 40, 50]);
console.log('Sum of all index:', sum)



//Returning even numbers from an array
function outEven(array){
    // console.log(array)
    let evens = [];
    let sum = 0;

    //using for off
    // for( let arr of array){
    //     // console.log(arr)
    //     if(arr%2===0){
    //         evens.push(arr);
    //     }        
    // }
    // return evens;


    //using For loop
    for( let i = 0; i<array.length ; i++){
        if(array[i]%2===0){
            // console.log(array[i])
            evens.push(array[i]);
        }
    }
    return evens;


}
let even = outEven([2, 5, 3, 4, 7, 6, 9, 8]);
console.log('Even numbers are:', even)


//Sum of Even from Array
function sumOfEven(array){
    // console.log(array)
    let sum = 0;
    for(let arr of array){
        
        if(arr%2===0){
            sum = sum + arr;   
        }
    }
    return sum;
}
let sumEven = sumOfEven([10, 11, 14, 15, 16])
console.log(sumEven)