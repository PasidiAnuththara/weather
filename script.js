
navigator.geolocation.getCurrentPosition((position)=>{
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    weatherloader(position.coords.latitude + ","+position.coords.longitude)
    
})



function weatherloader(location){
    fetch("https://api.weatherapi.com/v1/current.json?key=10e74308ba414a6183992314261311&q=negombo"+location)

    .then(res => res.json ())
    .then(data => {
        console.log(data);
        // document.getElementById("lblDisplay").innerHTML=`
        //     <img src = "${data.current.condition.icon}" alt="">
        //     <h1>${data.current.condition.text}</h1>
        //     <h2>${data.current.condition.code}</h2>
        //     <h2></h2>
        //     <p></p>
        // `
    })
}

function Weathersearch () {
    let txtCity = document.getElementById("txtCity").Value;
    weatherloader(txtCity);
}

        