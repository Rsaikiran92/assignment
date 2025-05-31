async function getdata() {
    try {
        let data=await fetch("https://jsonplaceholder.typicode.com/users");
        data = await data.json();
        data.forEach(element => {
            console.log(element.name)
        });
    } catch (error) {
        console.log(error);
    }
}

getdata();