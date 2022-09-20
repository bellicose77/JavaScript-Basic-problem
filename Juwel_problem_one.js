const nestedObj  ={
    name: { first: 'Robert', middle: '', last: 'Smith' },
    age: 25,
    DOB: '-',
    hobbies: [ 'running', 'coding', '-' ],
    education: { highschool: 'N/A', college: 'Yale' }
  
}
//let key = Object.keys(obj);
//let key1 = Object.keys(key[0].name)
const removeFalsyValue = (obj)=>{
    Object.keys(obj).forEach((key,index)=>{
        if (obj[key] && typeof obj[key] === "object"){
            removeFalsyValue(obj[key]);
        }
        if (obj[key] === "-" || obj[key] === "" || obj[key] === "N/A"){
            delete obj[key];


        }

    });
    return obj;
}
const updatedObj = removeFalsyValue(nestedObj);
console.log(updatedObj);
//console.log(obj)


// obj ={
//     name: { first: 'Robert', last: 'Smith' },
//     age: 25,
//     hobbies: [ 'running', 'coding', '-' ],
//     education: { college: 'Yale' }

// }