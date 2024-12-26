const array1 = [1, 2, 3, 4];
const reducer = (accumaltor, currentvalue) => accumaltor + currentvalue;

console.log(array1.reduce(reducer));
console.log("#".repeat(70));
console.log(array1.reduce(reducer, 5));
