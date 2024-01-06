// // function solve(a, b) {
// // if(a < 5){
//     return a * b
// // }else{
//     return a + b    
// // }
// //     return a + b
// // }

// // console.log(solve(1, 2));

// console.log(1 < 5);
// if(1 < 5){
//     console.log('we are inside if block 1 < 5');
// }else if(5 < 1) {
// console.log('we are inside if block 5 < 1');
// }
// else {
//     console.log('we are outside if block')
// }

// function enterAPrice(price) {
//     if(price && typeof price === 'number'){
//         console.log('success')
//     }else{
//         console.log('please privde a price');
//     }
// }

// enterAPrice(0)

// function isNotEmptyArray(array) {
// if (array.lenght) {
//     console.log('array is not empty');
// } else {
//     console.log('array is empty')
// }
// }

// isNotEmptyArray()

// function solve(action){
//     if(action === 'hello'){
//         console.log('hello');
//     }else if(action === 'bye'){
//         console.log('bye');
//     }else {
//         console.log('see you');
//     }
// }
// solve('asd')

// function greeting(name) {
//     if(name) {
//         return ('Hello ' + name);
//     }else {
//         return ('Hello Guest');
//     }
// }

// console.log(greeting('Gosho'))

function studentGrade(score) {
//     if(score >=90) {
//         return ('A')
//     }else if(score >=80) {
//         return ('B')
//     }else if(score >=70) {
//         return ('C')
//     }else if(score >=60) {
//         return ('D')
//     }else {
//         return ('F')
//     }
// }

// console.log(studentGrade('100'))

// function daysOfWeek(string) {
//     if(string = 1) {
//         return ('Monday')
//     }else if(string = 2) {
//         return ('Tuesday')
//     }else if(string = 3) {
//         return ('Wednesday')
//     }else if(string = 4) {
//         return ('Thursday')
//     }else if(string = 5) {
//         return ('Friday')
//     }else if(string = 6) {
//         return ('Saturday')
//     }else if(string = 7) {
//         return ('Sunday')
//     }else {
//         return ('Invalid String')
//     }
// }

// console.log(daysOfWeek('1'))

for(let step = 0; step < 5;step++) {
    console.log('this is step Number ${step}');    
}