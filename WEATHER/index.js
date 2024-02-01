// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi';
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c05929a433mshfc2c6c50e4c5247p184c60jsn10ae397d9ecb",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
	cityName.innerHTML = city;
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city ,options)
		.then((Response) => Response.json())
		.then((Response) => {
		  console.log(Response)
		  cloud_pct.innerHTML = Response.cloud_pct;
		  temp.innerHTML = Response.temp;
		  feels_like.innerHTML = Response.feels_like;
		  humidity.innerHTML = Response.humidity;
		  min_temp.innerHTML = Response.min_temp;
		  max_temp.innerHTML = Response.max_temp;
		  wind_speed.innerHTML = Response.wind_speed;
		  wind_degrees.innerHTML = Response.wind_degrees;
		  sunrise.innerHTML = Response.sunrise;
		  sunset.innerHTML = Response.sunset;
		})
		.catch((err) => console.error(err));
}
submit.addEventListener("click" , (e) => {
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Mumbai")

// async function getweather() {
// try{
//     const Respons = await fetch(url, options);
// 	const result = await Respons.text();
// 	console.log(result);
// }catch (error) {
// 	console.error(error);
//   }
// }
