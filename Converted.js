const conver = (num) =>{
    if(num <=100){
        console.log(num)
    }
    else if(num >= 1000 & num<1000000){
        v=num/1000;
        console.log(v,'K')
    }
    else if(num>=1000000 & num<1000000000){
        d=num/1000000
        console.log(d,'M')
    }
    else{
        b=num/1000000000
        console.log(b,'B')
    }

}
conver