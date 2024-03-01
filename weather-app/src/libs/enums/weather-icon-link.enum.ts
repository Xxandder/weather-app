import { WeatherIcon } from "./weather-icon.enum"

const WeatherIconLink = {
    [WeatherIcon.CLEAR_DAY]: 'https://github.com/visualcrossing/WeatherIcons/blob/main/SVG/1st%20Set%20-%20Color/clear-day.svg',
    [WeatherIcon.CLEAR_NIGHT]: 'https://github.com/visualcrossing/WeatherIcons/blob/main/SVG/1st%20Set%20-%20Color/clear-night.svg',
    [WeatherIcon.CLOUDY]: 'https://github.com/visualcrossing/WeatherIcons/blob/main/SVG/1st%20Set%20-%20Color/cloudy.svg',
    [WeatherIcon.FOG]: 'https://github.com/visualcrossing/WeatherIcons/blob/main/SVG/1st%20Set%20-%20Color/fog.svg',
    [WeatherIcon.HAIL]: 'https://github.com/visualcrossing/WeatherIcons/blob/main/SVG/1st%20Set%20-%20Color/hail.svg',
    [WeatherIcon.PARTLY_CLOUDY_DAY]: 'https://github.com/visualcrossing/WeatherIcons/blob/main/SVG/1st%20Set%20-%20Color/partly-cloudy-day.svg',
    [WeatherIcon.PARTLY_CLOUDY_NIGHT]: 'https://github.com/visualcrossing/WeatherIcons/blob/main/SVG/1st%20Set%20-%20Color/partly-cloudy-night.svg',
    [WeatherIcon.RAIN_SNOW_SHOWERS_DAY]: 'https://github.com/visualcrossing/WeatherIcons/blob/main/SVG/1st%20Set%20-%20Color/rain-snow-showers-day.svg',
    [WeatherIcon.RAIN_SNOW_SHOWERS_NIGHT]: 'https://github.com/visualcrossing/WeatherIcons/blob/main/SVG/1st%20Set%20-%20Color/rain-snow-showers-night.svg',
    [WeatherIcon.RAIN_SNOW]: 'https://github.com/visualcrossing/WeatherIcons/blob/main/SVG/1st%20Set%20-%20Color/rain-snow.svg',
    [WeatherIcon.RAIN]: 'https://github.com/visualcrossing/WeatherIcons/blob/main/SVG/1st%20Set%20-%20Color/rain.svg',
    [WeatherIcon.SHOWERS_DAY]: 'https://github.com/visualcrossing/WeatherIcons/blob/main/SVG/1st%20Set%20-%20Color/showers-day.svg',
    [WeatherIcon.SHOWERS_NIGHT]: 'https://github.com/visualcrossing/WeatherIcons/blob/main/SVG/1st%20Set%20-%20Color/showers-night.svg',
    [WeatherIcon.SLEET]: 'https://github.com/visualcrossing/WeatherIcons/blob/main/SVG/1st%20Set%20-%20Color/sleet.svg',
    [WeatherIcon.SNOW_SHOWERS_DAY]: 'https://github.com/visualcrossing/WeatherIcons/blob/main/SVG/1st%20Set%20-%20Color/snow-showers-day.svg',
    [WeatherIcon.SNOW_SHOWERS_NIGHT]: 'https://github.com/visualcrossing/WeatherIcons/blob/main/SVG/1st%20Set%20-%20Color/snow-showers-night.svg',
    [WeatherIcon.SNOW]: 'https://github.com/visualcrossing/WeatherIcons/blob/main/SVG/1st%20Set%20-%20Color/snow.svg',
    [WeatherIcon.THUNDER_RAIN]: 'https://github.com/visualcrossing/WeatherIcons/blob/main/SVG/1st%20Set%20-%20Color/thunder-rain.svg',
    [WeatherIcon.THUNDER_SHOWERS_DAY]: 'https://github.com/visualcrossing/WeatherIcons/blob/main/SVG/1st%20Set%20-%20Color/thunder-showers-day.svg',
    [WeatherIcon.THUNDER_SHOWERS_NIGHT]: 'https://github.com/visualcrossing/WeatherIcons/blob/main/SVG/1st%20Set%20-%20Color/thunder-showers-night.svg',
    [WeatherIcon.THUNDER]: 'https://github.com/visualcrossing/WeatherIcons/blob/main/SVG/1st%20Set%20-%20Color/thunder.svg',
    [WeatherIcon.WIND]: 'https://github.com/visualcrossing/WeatherIcons/blob/main/SVG/1st%20Set%20-%20Color/wind.svg'
} as const;

export { WeatherIconLink };