const number = [3, 4, 5, 6, 7, 8];
const output = [];

// for(let i = 0; i < number.length; i++){
//     const element = number[i];
//     const result = element * element;
//     output.push(result);
// }
// function square(element){
//     return element * element;
// }

// number.map(function(element, index, array){
//     console.log(element, index, array);
// });

// const result = number.map(function(element){
//     return element * element;
// });
// console.log(result);

//const square = element => element * element;

const result = number.map(x => x * x);
console.log(result);

const smaller = number.filter(x => x < 5);
console.log(smaller);

const isThere = number.find(x => x > 5);
console.log(isThere);