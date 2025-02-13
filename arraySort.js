let friends = ['sakib', 'fokib', 'akib', 'rakib']
console.log(friends.sort()) 

let numbers = [ 20, 10, 90, 60, 50 ,30];
console.log(numbers.sort())

let num = [5, 22, 15, 8, 99];
let acs_sort = num.sort(function(a, b){ return a - b}) //For ascending 
console.log(acs_sort);


let des_sort = num.sort(function(a, b){ return b-a}) // for descending 
console.log(des_sort)