import { DailyForecast, TripForecast, Trips } from '../components/components.js';

import { tripsForecast } from '../libs/constants/constants.js';
import styles from './styles.module.scss';

const MainPage: React.FC = () => {
  return (
    <div className="_container">
        <div className={styles['main-page']}>
            <main className={styles['main']}>
                <h1>Weather Forecast</h1>
                <Trips/>
                <TripForecast tripForecast={tripsForecast}/>
            </main>
            <DailyForecast/>
        </div>
    </div>
  )
}

export { MainPage };
