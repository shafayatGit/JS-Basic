let mobile={
    brand: 'Iphone',
    display: 'LCD',
    camera: '12MP',
    color: 'Black',
    price: '30k'
}

//Object e loop korar jonno for in use korte hoy
for(let prop in mobile){
    console.log(prop)
    console.log(mobile[prop]); //Property er value nitesi
}

//Another way using keys
let keys = Object.keys(mobile)
console.log(keys);
for(let key of keys){ //for of korte hobe karon keys ekta array
    console.log(key, mobile[key]);
}

//Declaration of Object
let pen={
    name:'Hi-school', brand: 'Matador', color: 'blue',
} 
console.log(pen);

for(let p in pen){
    console.log(p , ':', pen[p]);
}

//Declaration
let pencil = new Object({color: 'black', price: '10 Taka'})
console.log(pencil);
