import { type DailyForecastData, type WeatherIconType } from "../types/types.js";
import { daysOfWeek } from "../constants/constants";
import { WeatherIconLink } from "../enums/enums.js";
import { convertFahrenheitToCelsius } from "../helpers/helpers.js";

type TripForecast = {
    days: {
        tempmax: number;
        tempmin: number;
        temp: number;
        datetime: string;
        icon: string
    }[]
}



const tripForecastResponseToTripForecastData = (tripForecastResponse: TripForecast): DailyForecastData[] => {
    return tripForecastResponse.days.map(dayForecast => {
        return {
            date: dayForecast.datetime,
            weekday: daysOfWeek[(new Date(dayForecast.datetime)).getDay()],
            iconLink: WeatherIconLink[dayForecast.icon as WeatherIconType] as string,
            minimumTemperature: convertFahrenheitToCelsius(dayForecast.tempmin),
            maximumTemperature: convertFahrenheitToCelsius(dayForecast.tempmax),
            temperature: convertFahrenheitToCelsius(dayForecast.temp)
        }
    })
}

export { tripForecastResponseToTripForecastData };