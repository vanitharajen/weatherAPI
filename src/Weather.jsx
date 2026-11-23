import { useState } from "react"
import axios from "axios"
function Weather(){
    const [place,setPlace]=useState("")
    const[weathercheck,setweathercheck]=useState("")
    const[temp,settemp]=useState("")
    const[desc,setdesc]=useState("")
    const [error, setError] = useState("")
    function handlePlace(evt){
        setPlace(evt.target.value)
        setError("")
    }
    function getWeather(){
        if (place.trim() === "") {
    setError("Please enter a city name")
    return
}
        var WeatherData=axios(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=bd6435ecbabf2c949e641690afe94e65`)
        WeatherData.then(function(success){
            console.log(success.data)
            setweathercheck(success.data.weather[0].main)
            settemp(success.data.main.temp)
            setdesc(success.data.weather[0].description)
        })
        WeatherData.catch(function(error) {
            console.log(error)
        setError("Invalid place! Please enter a valid city.")
        setweathercheck("")
        settemp("")
        setdesc("")
    })
    }
    return(
        
        <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 flex items-center justify-center p-5">
{/* Clouds */}
<div className="absolute top-10 left-10 text-7xl">
    ☁️
</div>

<div className="absolute top-32 right-10 text-8xl">
    ☁️
</div>
<div className="absolute top-10 left-96 text-7xl">
    ☀️
</div>
<div className="absolute bottom-10 left-20 text-8xl">
    ☁️
</div>

<div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8"> 
                   <div className="rounded">
                    <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
    🌤️ Weather Report
</h1>
<input
    type="text"
    onChange={handlePlace}
    value={place}
    placeholder="Enter your city"
    className="w-full border border-blue-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
/> </div>
 <div className="mt-2">
<button
    onClick={getWeather}
    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl py-3 mt-3 transition duration-300"
>
    Get Weather
</button>                </div>
<div className="mt-6 bg-blue-50 rounded-xl p-5 space-y-3 text-gray-700">
    {error && <p className="text-red-600 font-medium">{error}</p>}

    <h1><b>Weather:</b> {weathercheck}</h1>
    <p><b>Temperature:</b> {temp}</p>
    <p><b>Description:</b> {desc}</p>
</div>
            </div>

        </div>
    )
}
export default Weather