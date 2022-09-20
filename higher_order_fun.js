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

// second example 
const players =[
    {
        name: "Shakib",
        avg: 38.23
    }
    ,
    {
        name:'Tamin',
        avg:36.74
    },
    {
        name:'Robin',
        avg:36.78
    },
    {
        name:'fobin',
        avg:37.12
    }
];
const playerWithThirteenAvg = [];
for(let i =0;i<players.length;i++){
    if(players[i].avg >=37){
        playerWithThirteenAvg.push(players[i]);
    }
};
console.log(playerWithThirteenAvg);