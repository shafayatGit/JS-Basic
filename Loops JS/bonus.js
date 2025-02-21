let products =[
    {id:1, name: 'Samsung phone', price: 78000,},
    {id:2, name: 'Apple phone', price: 73000,},
    {id:3, name: 'Walton phone', price: 73000,},
    {id:4, name: 'Mac', price: 133000,},
    {id:4, name: 'Nokia Phone', price: 73000,},
    {id:4, name: 'HP', price: 84000,},
    {id:4, name: 'Dell', price: 56000,},
]



function matchedProducts(products, search){
    let matched =[]
    for(let product of products ){
        if(product.name.toLowerCase().includes(search.toLowerCase())){   // jokhon amra case ignore korbo tokhon jar vitore ase shey and jake khujtesi shey duijon kei lowercase korbo.
            matched.push(product); 
        }
}
return matched
}

let result = matchedProducts(products, 'phone');
console.log(result)