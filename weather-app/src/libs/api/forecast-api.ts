import  dotenv from 'dotenv'

dotenv.config();

import { ForecastApi } from './forecast-api-service.js';

const forecastApi = new ForecastApi(process.env['WEATHER_API_KEY'] as string);

export { forecastApi };