function add(num1, num2) {
    console.log(num1, num2);
    console.log(arguments); // kon index er value koto sheta dekhabe   
    console.log(arguments[2]); // evabe arguments o console kora jay index hishabe  
}
add(12, 14, 13, 16)