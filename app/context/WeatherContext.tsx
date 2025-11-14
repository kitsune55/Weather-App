import { createContext } from "react";
import type { WeatherDataType2 } from "utils/getWeatherData";

export const weatherDataContext = createContext<WeatherDataType2 | null>(null)
