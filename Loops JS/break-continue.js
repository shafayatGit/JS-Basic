// Break ---> stop the loop after the given condition 
// Continue ---> Skip this value or this iteration

for(let num = 0; num<=20 ; num++){
    console.log(num);
    if(num>=10){
        break;
    }
}

for (let i = 1; i<=20 ; i++){
    if(i % 2 === 0){
        continue;  //Ekhane jodi condition milee tahole skip korbe.. tai even numbers skip hocche odds output ashtese.
    }
    console.log(i);
}

