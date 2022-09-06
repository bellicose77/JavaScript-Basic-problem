const scores =[
    {id:1,runs:40},
    {id:2,runs:65},
    {id:3,runs:70},
    {id:4,runs:100},
    {id:5,runs:65},
];
const value = scores.findIndex(item => item.id===4);
//const deletedvalue = scores.splice(value,1)
console.log(scores)