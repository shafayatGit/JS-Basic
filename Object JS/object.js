//Object is non-primitive
let me ={ //vitore shb ek ekta property
    Name: 'Md Shafayat Hossain Patowary',
    ID: '0112430398',
    School: 'FGPHS',
    College: 'DRMC',
    Uni: 'UIU',
    isGoodStudent: false,
    'fav place': ['Cox', 'Saint', 'Bandorban'],

}
console.log(me);


//Property Declaration---->Dot(.) notation
console.log(me.Name);

//Property Declaration---->Bracket[] notation
console.log(me['College']) //Inverted Comma must
console.log(me['fav place'])

// property name change
me['fav place'] = 'Shajek';  //Have to use third bracket
console.log(me);


//New Section

let laptop = {
    display: 'LED',
    brand: 'HP',
    processor: 'INTEL',
    generation: '13 Gen',
    SSD: '512GB',
    price: '40k',
}

//Topic ----> KEYS ----mane koyta object(keys) ase and ki ki ta dekhabe
let keys = Object.keys(laptop) //property er naam dibe
console.log(keys);

//Topic -----> Values; mane object er property er shob value dekhabe
let values = Object.values(laptop);
console.log(values);


// Multiple values
let clg = {
    name: 'DRMC',
    class : [11, 12],
    events: ['Concert', 'Govt Holidays', 'Sports Day' ],
    unique: {
        color:'white',
        result:{
            mostStudent:'GPA-5',
        }
    },
}
console.log(clg.unique.color)
console.log(clg.unique.result.mostStudent)

//jodi change korte chai - Setting Value
clg.unique.result.mostStudent = 'Dabba';
console.log(clg.unique.result.mostStudent);

//Another Way
clg.events[0]= 'Victory Day';
console.log(clg.events)

//Topic-------> Deleting the property
delete clg.unique.color;
console.log(clg)


