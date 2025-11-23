function sumAll(...values){
    let sum=0; 
    for(let i of values){
    sum += i
    }
       console.log(sum)
}

sumAll(1, 2, 3, 4) // should return 10
