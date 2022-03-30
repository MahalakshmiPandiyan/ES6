
const language = ['c', 'c++', 'python'];

const it = language[Symbol.iterator]();


console.log(it.next());

console.log(it.next());

console.log(it.next());

console.log(it.next());