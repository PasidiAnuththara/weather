
function loadWeatherinfo(location) {
    fetch("https://api.weatherapi.com/v1/current.json?key=826898a2aef743548dc92142261311&q=Panadura")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let userlocation = document.getElementById("txtLocation").value;
            document.getElementById("lbl5days").innerHTML = `
            <table>
                <tr>
                    <td>
                        <h5 class="Ddate">${userlocation}</h5>
                        <img class="dIcon" src="" alt="" width="30px">
                        <h5 class="dTemp">${userlocation}</h5>
                        <h5>${userlocation}</h5>
                    </td>
                    <td>
                        <h5 class="Ddate">${userlocation}</h5>
                        <img class="dIcon" src="" alt="" width="30px">
                        <h5 class="dTemp">${userlocation}</h5>
                        <h5>${userlocation}</h5>
                    </td>
                    <td>
                        <h5 class="Ddate">${userlocation}</h5>
                        <img class="dIcon" src="" alt="" width="30px">
                        <h5 class="dTemp">${userlocation}</h5>
                        <h5>${userlocation}</h5>
                    </td>
                    <td>
                        <h5 class="Ddate">${userlocation}</h5>
                        <img class="dIcon" src="" alt="" width="30px">
                        <h5 class="dTemp">${userlocation}</h5>
                        <h5>${userlocation}</h5>
                    </td>
                    <td>
                        <h5 class="Ddate">${userlocation}</h5>
                        <img class="dIcon" src="" alt="" width="30px">
                        <h5 class="dTemp">${userlocation}</h5>
                        <h5>${userlocation}</h5>
                    </td>
                    
                </tr>

            </table>
            `
            document.getElementById("lblFullWeather").innerHTML = `
               <table>
                    <tr>
                        <td>
                            <img class="wIcone" src="${userlocation}" alt="weather icon" width="90px">
                        </td>
                        <td>
                            <h5 class="Wlocation">${userlocation}</h5>
                            <h5 class="wType">${userlocation}</h5>
                            <h2 class="wTemp">${userlocation}</h2>
                            <h6>${userlocation}</h6>
                        </td>
                    </tr>
                </table>
            `
        })

}

function btnSearch() {
    let userlocation = document.getElementById("txtLocation").value;
    loadWeatherinfo(userlocation);
}

// navigator.geolocation.getCurrentPosition((location)=>{
//     console.log(location.coords.latitude);
//     console.log(location.coords.longitude);

//     loadWeatherinfo(location.coords.latitude+","+location.coords.longitude)

// })

function map() {
    window.open(
        "https://www.google.com/maps",
        "GoogleMap",
        "width=800,height=600"
    );

    console.log("hi");
}


