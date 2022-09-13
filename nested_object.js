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
            val:{
                ag:20
            }
          
        }

}
  
}
const {name:{first,last},DOB,age,education:{college,love:{gfN,val:{ag}}},hobbies:[a,b]} =obj;
console.log(`My first name is ${first} 
and date of birth${DOB} and age is ${age},I in a collage of ${college}
and my love is:${gfN} and her age is ${ag} and she is loving ${b}
`);