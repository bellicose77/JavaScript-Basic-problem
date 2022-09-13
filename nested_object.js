const obj ={
    name: { first: 'Robert', middle: '', last: 'Smith' },
    age: 25,
    DOB: '-',
    hobbies: [ 'running', 'coding', '-' ],
    education: { highschool: 'N/A', college: 'Yale' }
  
}
const {name} =obj;
console.log(`My first name is ${name}`);