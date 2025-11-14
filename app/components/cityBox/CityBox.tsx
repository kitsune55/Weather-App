import { weatherDataContext } from "context/WeatherContext"
import { useContext } from "react"
import type { WeatherDataType2 } from "utils/getWeatherData"

export default function CityBox () {

    const weatherContext = useContext(weatherDataContext)
    const {timezone} = weatherContext as WeatherDataType2
    const slicedTimezone = timezone.indexOf('/') !== -1 ? timezone.substring(timezone.indexOf('/') + 1) : timezone
    const todayDate = new Intl.DateTimeFormat('en-US', {
        weekday: 'long', 
        month: 'short',
        day: 'numeric',
        year:'numeric'
    }).format(new Date())


    if (!weatherContext) return <p>No current data. Pleast wait or try again.</p>

    if (weatherContext!==null) return (
        
        <div className="w-full h-60 bg-[#4657D9] rounded-lg flex items-center ">
            <div className="w-full flex justify-between">
        {/* left side */}
        <div className="px-4 w-1/2 flex flex-col items-start ">
        <p className="text-2xl mb-2">{slicedTimezone}</p>
        <p>{todayDate}</p>
        </div>

        {/* right side */}
        <div className="w-1/2">
            <p>{weatherContext.current.temperature_2m} °C</p>
        </div>

        </div>
            </div>
        
    )
}