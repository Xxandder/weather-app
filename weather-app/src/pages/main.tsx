import { ChangeEvent, useState } from 'react';
import { DailyForecast, TripForecast, Trips } from '../components/components.js';

import { tripsForecast } from '../libs/constants/constants.js';
import styles from './styles.module.scss';

const MainPage: React.FC = () => {
    const [name, setName] = useState('');

    const handleInputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
        console.log(name);
    }

  return (
    <div className="_container">
        <div className={styles['main-page']}>
            <main className={styles['main']}>
                <h1 className={styles['main__header']}>Weather Forecast</h1>
                <label className={styles['main__find-by-name']}>
                    Сортировать по имени:
                    <input type="text" value={name} onChange={handleInputOnChange}/>
                </label>
                <Trips/>
                <TripForecast tripForecast={tripsForecast}/>
            </main>
            <DailyForecast/>
        </div>
    </div>
  )
}

export { MainPage };
