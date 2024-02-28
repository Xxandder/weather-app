
import { DailyForecast } from "./components/daily-forecast/daily-forecast.js";
import { TripForecast } from "./components/trip-forecast/trip-forecast.js";
import { Trips } from "./components/trips/trips.js";
import { tripsForecast } from './libs/constants/constants.js';

function App() {
  return (
    <>
      <Trips/>
      <DailyForecast/>
      <TripForecast tripForecast={tripsForecast}/>
    </>
  )
}

export default App
