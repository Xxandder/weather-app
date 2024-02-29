import { ChangeEvent, useState } from 'react';
import { DailyForecast, TripForecast, Trips } from '../components/components.js';
import searchIcon from '~/assets/icons/search.svg';
import { tripsForecast } from '../libs/constants/constants.js';
import clsx from 'clsx'
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
                <div className={clsx(styles["main__find-by-name"],
                                     styles["find-by-name"])}>         
                        <img src={searchIcon} alt="" />
                        <input type="text" value={name} onChange={handleInputOnChange} placeholder='Search your trip'/>
                </div>
                <Trips/>
                <TripForecast tripForecast={tripsForecast}/>
            </main>
            <DailyForecast/>
        </div>
    </div>
  )
}

export { MainPage };
