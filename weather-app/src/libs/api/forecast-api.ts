import { WEATHER_API_KEY } from '../constants/env.js';

import { ForecastApi } from './forecast-api-service.js';

const forecastApi = new ForecastApi(WEATHER_API_KEY);

export { forecastApi };