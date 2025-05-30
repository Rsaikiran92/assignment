let number=5;
let id=setInterval(()=>{
    console.log(number);
    number--;
    if(number===0){
        clearInterval(id)
    }
},1000);


