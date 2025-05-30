let arr= [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }]

function processProducts(){
    let productnames=arr.map((product)=>product.name);
    console.log(productnames);
    arr.forEach((product)=>{
        if(product.price>50){
            console.log(`${product.name} is above $50`)
        }else if(product.price<50){
            console.log(`${product.name} is below $50`)
        }else{
            console.log(`${product.name} is exactly $50`)
        }    
    })
}
processProducts();