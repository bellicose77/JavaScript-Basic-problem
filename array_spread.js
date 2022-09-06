const array =[1,2,3]
const array1 = [4,5,6]
// const obj = {
//     ...array
// }
const array2 = [...array,...array1]  // array coping
//console.log(array2)
// console.log(obj)
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };
const obj3 ={...obj1}
obj3.foo='csx'
console.log(obj3)
console.log(obj1)