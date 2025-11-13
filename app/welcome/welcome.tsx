
import Footer from "@components/footer/Footer";
import MainPage from "@components/main-page/MainPage";
import Navbar from "@components/nav-bar/Navbar";
import { useEffect, useState } from "react";
import getWeatherData from "utils/getWeatherData";
import type { WeatherDataType2 } from "utils/getWeatherData";
import { weatherDataContext } from "context/WeatherContext";



export function Welcome() {
  const [weatherData, setWeatherData] = useState<WeatherDataType2 | null>(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string|null>(null)
  
  useEffect(()=> { 
    getWeatherData()
      .then(setWeatherData)
      .catch((error)=> {
        console.log('failed to get weather data. Catched thrown error here: ', error.message)
        setError('Failed to get weather data. Please try again.')
      })
      .finally(()=>  {
        setLoading(false)
      })
  },[])


  if (error) {
    return <p role="alert">{ error}</p>
  }

  if (weatherData !== null) {
    return (
      <weatherDataContext.Provider value={weatherData}>
      <Navbar/>
      <main className="flex items-center justify-center pt-16 pb-4 w-full">
      <MainPage/>
      </main>
      <Footer/> 
      </weatherDataContext.Provider>
    );
  }
}

