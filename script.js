
function loadWeatherinfo(location) {
    fetch("https://api.weatherapi.com/v1/current.json?key=826898a2aef743548dc92142261311&q=Panadura")
        .then(res => res.json())
        .then(data => {
            console.log(data);

            document.getElementById("lblDateTime").innerText=data.location.localtime;

            document.getElementById("lbl5days").innerHTML = `
            <table>
                <tr>
                    <td>
                        <h5 class="Ddate">${data.forecast.forecastday[0].date}</h5>
                        <img class="dIcon" src="https:${data.forecast.forecastday[0].day.condition.icon}" alt="" width="30px">
                        <h5 class="dTemp">${data.forecast.forecastday[0].day.avgtemp_c} C</h5>
                        <h5>${data.forecast.forecastday[0].day.condition.text}</h5>
                    </td>
                    <td>
                        <h5 class="Ddate">${data.forecast.forecastday[0].date}</h5>
                        <img class="dIcon" src="https:${data.forecast.forecastday[0].day.condition.icon}" alt="" width="30px">
                        <h5 class="dTemp">${data.forecast.forecastday[0].day.avgtemp_c} C</h5>
                        <h5>${data.forecast.forecastday[0].day.condition.text}</h5>
                    </td>
                    <td>
                        <h5 class="Ddate">${data.forecast.forecastday[0].date}</h5>
                        <img class="dIcon" src="https:${data.forecast.forecastday[0].day.condition.icon}" alt="" width="30px">
                        <h5 class="dTemp">${data.forecast.forecastday[0].day.avgtemp_c} C</h5>
                        <h5>${data.forecast.forecastday[0].day.condition.text}</h5>
                    </td>
                    <td>
                        <h5 class="Ddate">${data.forecast.forecastday[0].date}</h5>
                        <img class="dIcon" src="https:${data.forecast.forecastday[0].day.condition.icon}" alt="" width="30px">
                        <h5 class="dTemp">${data.forecast.forecastday[0].day.avgtemp_c} C</h5>
                        <h5>${data.forecast.forecastday[0].day.condition.text}</h5>
                    </td>
                    <td>
                        <h5 class="Ddate">${data.forecast.forecastday[0].date}</h5>
                        <img class="dIcon" src="https:${data.forecast.forecastday[0].day.condition.icon}" alt="" width="30px">
                        <h5 class="dTemp">${data.forecast.forecastday[0].day.avgtemp_c} C</h5>
                        <h5>${data.forecast.forecastday[0].day.condition.text}</h5>
                    </td>
                </tr>
            </table>
            `;


            document.getElementById("lblFullWeather").innerHTML = `
               <table>
                    <tr>
                        <td>
                            <img class="wIcone" src="https:${data.current.condition.icon}" alt="weather icon" width="90px">
                        </td>
                        <td>
                            <h5 class="Wlocation">${data.location.name},${data.location.country}</h5>
                            <h5 class="wType">${data.current.condition.text}</h5>
                            <h2 class="wTemp">${data.current.temp_c} C</h2>
                            <h6>Humidity: ${data.current.humidity}% | Wind: ${data.current.wind_kph} km/h</h6>
                        </td>
                    </tr>
                </table>
            `;
        });

}

function btnSearch() {
    let userlocation = document.getElementById("txtLocation").value;
    loadWeatherinfo(userlocation);
}

function map() {
    window.open(
        "https://www.google.com/maps",
        "GoogleMap",
        "width=800,height=600"
    );

    console.log("hi");
}


