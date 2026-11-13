fetch("https://api.weatherapi.com/v1/current.json?key=10e74308ba414a6183992314261311&q=negombo")
    .then(res => JSON())
    .then(data => {
        console.log(data);
        document.getElementById("lblDisplay").innerHTML=`
            <img src = "${data.current.condition.icon}" alt="">
            <h1>$() 
        `
        
    })
        