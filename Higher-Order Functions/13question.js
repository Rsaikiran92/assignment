let arr= ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]

let uniqueCategories = arr.reduce((acc,val)=>{
    if(acc[val]===undefined){
        acc[val]=1;
    }else{
        acc[val]++;
    }
    return acc
},{})

console.log(uniqueCategories); 