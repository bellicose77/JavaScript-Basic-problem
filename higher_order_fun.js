// before higher order 

const arr = [1,2,4,5];
const result = [];

for(let i=0; i<arr.length;i++){
      result.push(arr[i]*2);
}
console.log(result);

// using higher order function
const num = [1,2,4,6];
const res = num.map((item)=>item * 2);
console.log(res)