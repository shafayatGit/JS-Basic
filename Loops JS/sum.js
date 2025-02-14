let num = 1;
let sum = 0;

while (num <= 10) {
    console.log(num);
    sum = sum + num;
    num++; //Vitore dile ekta ekta kore sum show korbe
}
console.log('Sum:', sum) //Baire dile overall Sum show korbe

// Sum of even nd odd numbers

let num2 = 1;
let sum2 = 0;
let sum3 = 0;
while (num2 <= 10) {
    // console.log(num2);

    if (num2 % 2 === 0) {
        console.log(num2, 'Even')
        sum2 = sum2 + num2;
        // console.log('Sum of Even Numbers:', sum2)
    } 
    else {
        console.log(num2, 'Odd');
        sum3= sum3 + num2;
    }

    console.log('sum of even numbers', sum2);
    console.log('sum of odd numbers', sum3);



    num2++;
}

// Sum from 1 to 20 those who are divisible by 3

let sum4 = 0;
for(let num4=1 ; num4 <= 20 ; num4++){
    if(num4%3===0){
        sum4 = sum4 + num4;
    }
}
console.log('Sum of 1 to 20 divisible by 3', sum4)