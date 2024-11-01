const button = document.getElementById("searchbutton")
const input = document.getElementById("textinput")
const locname = document.getElementById("locName")
const temp = document.getElementById("temp")
const time = document.getElementById("time")

async function getData(cityName){
    const result = await fetch(`http://api.weatherapi.com/v1/current.json?key=636a37d67f4e41feba4110057240111&q=${cityName}&aqi=yes`)
    return await result.json() //will return the json parsed value
}

button.addEventListener("click",async()=>{
    
        const result = await getData(input.value)
        locname.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`
        time.innerText = "Time: "+result.location.localtime
        temp.innerText = result.current.temp_c+" Celcius"
    

});