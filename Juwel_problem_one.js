const obj ={
    name: { first: 'Robert', middle: '', last: 'Smith' },
    age: 25,
    DOB: '-',
    hobbies: [ 'running', 'coding', '-' ],
    education: { highschool: 'N/A', college: 'Yale' }
  
}
let key = Object.keys(obj);
let value = Object.values(obj);
let entries = Object.entries(obj);
console.log(key);
// console.log(value);
console.log(entries)
