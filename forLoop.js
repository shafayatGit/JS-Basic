// Even Numbers
for(num=0 ; num<=10 ; num=num+2){
    console.log( 'Even numbers:',num)
}

// Odd numbers

for(num=1 ; num<=10 ; num=num+2){
    console.log( 'Odd numbers:',num)
}

// Sum of ODD 11-20

let sum=0;
for(num=11 ; num<=20 ; num+=2){
    console.log( 'Odd numbers:',num);
    sum=sum+num;
}
console.log( 'sum of 11 to 20 odd numbers:', sum)

// Decremental Multi

let multi = 1;
for(num=5 ; num>=1 ; num--){
    console.log(num);
    multi = multi * num;
}
console.log('Multiplication from 1 to 5', multi)