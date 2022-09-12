const obj ={
    firstname: "Dulal",
    age:25,
    lastname:"halder"
}
const print = (obj) =>{
    const {firstname,lastname} = obj;
    console.log(`First Name: ${firstname} and lastName: ${lastname}`)
}
print(obj)