// settingup varialbes 
let img = document.querySelector(".img img");
let description = document.querySelector(".img p");
let button = document.querySelector(".input button");
const apiKey = `API KEY` ;
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
           throw new Error("City not found, please check spelling");

         }
         return res.json();
      })
      .then((data)=>{
         console.log(data);
           let iconCode = data.weather[0].icon;
           let des = data.weather[0].description ;

          img.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
          description.textContent = `${des}`
         wind.textContent = `Wind : ${data.wind.speed}m/s`;
         humidity.textContent = `Humidity : ${data.main.humidity}%` ;
         temp.textContent = `Temperature : ${data.main.temp}°C` ;
         console.log(data);
         
      })
      .catch((e)=>{
         alert(`${e.message} `);
         
      })
   }

}
button.addEventListener("click", getWeather);





