let weather={
    "apiKey":"b5d29108d32a75886e1053c38ecb566b",
    fetchWeather:function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            +"&units=metric&appid="
            + this.apiKey
        ).then((res)=>res.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather:function(data){
        const{name}=data;
        const{icon,description}=data.weather[0];
        const{temp,humidity}=data.main;
        const{speed}=data.wind;

        document.querySelector('.city span').innerText= name; 
        document.querySelector('.icon').src= "https://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector('.description span').innerText=description; 
        document.querySelector('.temp span').innerText=temp +"°C"; 
        document.querySelector('.humidity span').innerText= humidity +"%"; 
        document.querySelector('.wind span').innerText= speed +" km/h"; 
        document.querySelector('.weather').classList.remove('loading')
    },
    search:function(){
        this.fetchWeather(document.querySelector('.search-bar').value)
    }
}

document
.querySelector('.search-button')
.addEventListener('click',function(){
    weather.search();
});

document
.querySelector('.search-bar')
.addEventListener('keyup',(e)=>{
    e.preventDefault();
    if(e.key=="Enter"){
        weather.search();
    }

})
weather.fetchWeather('Nairobi');