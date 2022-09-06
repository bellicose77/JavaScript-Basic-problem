const array1 = [2,4,5,5,2];
const words = ['one','two','three','four']

// array1.forEach((element,index)=>{
//     console.log(`a[${index}] -> ${element}`)
// })

const faterro = (element,index)=>{
    console.log(`a[${index}] -> ${element}`)
}

array1.forEach(faterro);

words.forEach((word,index)=>{
    console.log(`element${word}  and index${index}`)
    if(word==='three'){
        
        words.shift()
    }
    //console.log(word)
})
console.log(words)
