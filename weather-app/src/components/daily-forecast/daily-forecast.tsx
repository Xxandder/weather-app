import styles from './styles.module.scss';
import rainyIcon from '~/assets/icons/weather/rainy.svg';
import cloudIcon from '~/assets/icons/cloud.svg';
import { clsx } from 'clsx'
import { Countdown } from './countdown/countdown.js';
import { type DailyForecastData } from '~/libs/types/types.js';

type Properties = {
    forecast: DailyForecastData;
    city: string;
    startTripDate: Date;
}

const DailyForecast: React.FC<Properties> = ({forecast, city, startTripDate}) =>{
    console.log(startTripDate)
  return <div className={styles['daily-forecast']}>
            <div className={clsx(
                styles["daily-forecast__cloud-first"],
                styles["daily-forecast__cloud"],
                "_ibg"
                )}>
                <img src={cloudIcon} alt="" />
            </div>
            <div className={clsx(
                styles["daily-forecast__cloud-second"],
                styles["daily-forecast__cloud"],
                "_ibg"
                )}>
                <img src={cloudIcon} alt="" />
            </div>
            <div className={clsx(
                styles["daily-forecast__cloud-third"],
                styles["daily-forecast__cloud"],
                "_ibg"
                )}>
                <img src={cloudIcon} alt="" />
            </div>
            <div className={clsx(
                styles["daily-forecast__cloud-fourth"],
                styles["daily-forecast__cloud"],
                "_ibg"
                )}>
                <img src={cloudIcon} alt="" />
            </div>
            <div className={styles["daily-forecast__info"]}>
                <h2 className={styles["daily-forecast__day"]}>{forecast.weekday}</h2>
                <div className={styles["daily-forecast__value"]}>
                    <div className={styles["daily-forecast__weather-icon"]}>
                        <img src={forecast.iconLink} alt="" />
                    </div>
                    <div className={styles["daily-forecast__temperature"]}>
                        {forecast.temperature}<sup>°C</sup>
                    </div>
                    
                </div>
                <div className={styles["daily-forecast__city"]}>
                        {city}
                    </div>
            </div>
            <Countdown time={startTripDate}/>
        </div>

}

export  { DailyForecast };
