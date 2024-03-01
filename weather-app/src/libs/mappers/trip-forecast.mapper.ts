
type DailyForecast = {
    tempmax: number;
    tempmin: number;
    datetime: string;
}

type TripForecast = {
    days: DailyForecast[]
}

const tripForecastMapper = (tripForecastResponse: TripForecast): DailyForecast[] => {
    return tripForecastResponse.days.map(dayForecast => {
        return {
            tempmax: dayForecast.tempmax,
            tempmin: dayForecast.tempmin,
            datetime: dayForecast.datetime
        }
    })
}

export { tripForecastMapper };