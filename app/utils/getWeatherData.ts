import axios from 'axios';

export interface WeatherDataType2 {
  latitude: number ,
  longitude: number,
  generationtime_ms: number,
  utc_offset_seconds:number,
  timezone: string,
  timezone_abbreviation: string,
  elevation: number,
  current_units: {
    time: string,
    interval:string,
    temperature_2m: string,
    relative_humidity_2m: string,
    apparent_temperature: string,
    is_day: string,
    precipitation: string,
    wind_speed_10m: string
  },
  current: {
    [key:string] : string | number
  },
  hourly_units: {
   [key:string]:string
  },
  hourly: {
    "time": [
        string[]
    ],
    temperature_2m:
    [
        number[]
    ],
    daily_units: {
        [key:string]:string
    },
    daily: {
        time: [
            string[]
        ],
        temperature_2m_max: number[],
        temperature_2m_min: number[]
    }

}
}

export default async function getWeatherData():Promise<WeatherDataType2 | null> {
    try {
        const response = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=42.8333&longitude=12.8333&daily=temperature_2m_max,temperature_2m_min&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,wind_speed_10m&timezone=Asia%2FTokyo')
        return response.data;
    }
    catch (error) {
        console.error(error)
        throw error;
        // return null;
    }
}