let btn = document.getElementById("btn");

btn.addEventListener("click",getWheather);

async function getWheather(){
    const city = document.getElementById("city").value;
    const url = `http://api.weatherapi.com/v1/current.json?key=d8b32e4344614198a48165718262707&q=${city}&aqi=no`;

    try{
        const response = await fetch(url);
        const data = await response.json();


         document.getElementById("weather").innerHTML = `
         <img src="https:${data.current.condition.icon}" alt="Weather Icon">
            <h2>${data.location.name}, ${data.location.country}</h2>
            <h3>Temp: ${data.current.temp_c} °C</h3>
            <p>Condition: ${data.current.condition.text}</p>
            <p>Time: ${data.location.localtime}</p>
            <p>Humidity: ${data.current.humidity}%</p>
            <p>Wind: ${data.current.wind_kph} km/h</p>
        `;
    }
    catch(error){
        console.log(error);
    }
}
