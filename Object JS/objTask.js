
//Task 1
const color = {
    red: "#FFFFFF",
    green : 'eeeee',
    'golden rod': '#dabbbb',
}
console.log(color['golden rod'])

//Task 2
let car ={
    model: 'Toyota',
    year: 2020,
}
car['passanger capacity'] = 5;
console.log(car)



//Task 3
const student = {
    name: 'Shafayat Hossain',
    id : 17272,
    physics: {
        subject: 'HSC Physics',
        marks: 30,
    }
}
console.log(student.physics.marks);

//task 4
let length = Object.keys(student).length;
console.log(length)

