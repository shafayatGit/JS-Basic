let numbers = [10, 20, 30, 40, 50];

// console.log(numbers.reverse());

//Another way
let rev_num= [];
for(let num of numbers){
    // console.log(num);
    rev_num.unshift(num);
}
// console.log(rev_num)

//Another way
let reversed_num=[];
for(let i = 0; i<numbers.length; i++){
    let num = numbers[i];
    reversed_num.unshift(num)
}
// console.log(reversed_num)

//Another way
let rev_arr= []
for(let i = numbers.length - 1; i>=0 ; i--){
    // console.log(numbers[i]);
    rev_arr.push(numbers[i]);
    
}
console.log(rev_arr)