// settingup varialbes 

let button = document.querySelector(".input button");
const apiKey = `6110c57ceb5e73ab736b6b45e4f4b059` ;
let temp = document.querySelector(".temp p");
let humidity = document.querySelector(".humidity p");
let wind = document.querySelector(".wind p");
function getWeather(){
   let city = document.querySelector("#city").value.trim();

let country = document.querySelector("#country").value.trim();
   if(city==="" || country ==="" ){
      alert("Please Enter Input correctly");
   }
   else{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`;
      fetch(url)
      .then((res)=>{
         if(!res.ok){
            alert(`City is not found please check the spelling`) ;
           
         }
         return res.json();
      })
      .then((data)=>{
         console.log(data);
         wind.textContent = `Wind : ${data.wind.speed}m/s`;
         humidity.textContent = `Humidity : ${data.main.humidity}%` ;
         temp.textContent = `Temprature : ${data.main.temp}°C` ;
         
      })
      .catch((e)=>{
         alert(`Could not fetch weather data `);
         console.log(e);
      })
   }

}
button.addEventListener("click", getWeather);





