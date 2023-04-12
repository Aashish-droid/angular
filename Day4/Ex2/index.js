/*const list = ['hello', 'world', 'how', 'are', 'you'];
const upperCaseList = list.map((str) => str.toUpperCase());
console.log(upperCaseList); */

const list = ['hello', 'world', 'how', 'are', 'you'];

function upper() {
  const arr = [];
  for (let x of list) {
    arr.push(x.toUpperCase());
  }
  return arr;
}

console.log(upper()); 
