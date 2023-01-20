const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9e19004373mshabd5d5acd86380ap106e4fjsn9fb5a0ee45ba',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getweather = (city)=>{
cityname.innerHTML=city; 

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp

        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity

        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed

        cloud_pct.innerHTML = response.cloud_pct
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err=>console.error(err));
}
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getweather(city.value)
})
getweather("Mumbai")
