let nums = [10, 3, 7, 20, 13, 2];
//map
let square = nums.map(n)=> n*n;
console.log(square)

//filter
let prime = nums.filter((n)=> {
    for (let i=2; i<=nums.length; i++){
        if (n%i==0)
            return i;
    });
    console.log(prime)
}

//reduce
let total= nums.reduce((sum,n)=>sum+n,0);
console.log(total);

//sort
let descending = nums.sort((a,b)=>b-a);
console.log(descending)

