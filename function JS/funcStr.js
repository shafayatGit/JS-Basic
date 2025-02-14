//Given string has odd or even index
function string (str){
    // console.log(str)
    let size = str.length;
    if(size%2===0){
        return 'Even Index'
    }
    return 'Odd Index'
}
let result = string('Shafayat')
console.log(result)


//Double Or Triple
function doubleOrTriple(num,boolean){
    if(boolean === true){
        let result = num*2
        console.log(num, result)
    }
    else{
        
        let result = num*3;
        console.log(num, result)
    }
    }
doubleOrTriple(5, true)
doubleOrTriple(5, false)


