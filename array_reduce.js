const input = [1,-4,12,0,-3,29,-150]
const result = input.reduce((acu,cur)=>{
    if(cur>0){
        acu+=cur
    }
    return acu;

},0);
console.log(result)