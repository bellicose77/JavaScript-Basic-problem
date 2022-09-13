const obj ={
    name: { first: 'Robert', middle: '', last: 'Smith' },
    age: 25,
    DOB: '-',
    hobbies: [ 'running', 'coding', '-' ],
    education: { 
        highschool: 'N/A', 
        college: 'Yale',
        love:{
            gfN:"si",

        }

}
  
}
const {name:{first,last},DOB} =obj;
console.log(`My first name is ${first} and date of birth${DOB}`);