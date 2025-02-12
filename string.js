// String Immutable means unchangeable. Amra index bebohar kore change korte parbo na
// String Case Sensitive.


// Topic----->CASE
let school = "fgPhs";
console.log(school.toUpperCase());
console.log(school.toLowerCase())


// Topic---> SLICE
let address = 'Feni';
let part = address.slice(2,4); // name.slice(x,y)----> x <= SLICE < y 
console.log(part)


// Topic---> SPLIT
let name = 'Md Shafayat Hossain Patowary'
console.log(name.split(" ")); //Must have to use space between ""
console.log(name.split('a')); // a diye shbgulake vaag kore felbe

let friends = 'Rahim,Karim,Borim,Shorim,Morim';
console.log(friends.split(',')) // , diye shobaike alada alada string banai felbe


// Topic----> JOIN
let friend = [ 'Rahim', 'Karim', 'Borim', 'Shorim', 'Morim' ];
console.log(friend.join())  // shob gulake jora dibe
console.log(friend.join('||'))  // ja iccha ta diye jora dite parbo


// Topic-----> Concat
let first = 'Md';
let second = 'Shafayat';
let third = 'Hossain';
let fourth = 'Patowary';
console.log(first.concat(' ').concat(second).concat(' ').concat(third).concat(' ').concat(fourth)) //Syntax: string1.concat(string2)  concat(' ')-->Eta space er jonno use korte hobe



// Topic----> Includes
console.log(fourth.includes('a'))  // jeta khujbo sheta string e ache kina
console.log(fourth.includes('b'))



// Topic---->Reverse using for of
let reverse = '';  //first e empty string dhore nea lagbe 
let sentence = 'I am learning web developement' 
for(let letter of sentence){
    reverse = letter + reverse;
}
console.log(reverse)


// Another Way using for loop
let rev = '';
let sen = 'I am new in web developement';
for(let i=0 ; i<sen.length ; i++){
    // console.log(sen[i]);
    rev = sen[i] + rev;
}
console.log(rev);


// Another way Using Split and Join 
let reversed = sentence.split('').reverse('').join('')
console.log(reversed)

