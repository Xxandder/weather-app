import styles from './styles.module.scss';
import rainyIcon from '~/assets/icons/weather/rainy.svg';
import cloudIcon from '~/assets/icons/cloud.svg';
import { clsx } from 'clsx'
import { Countdown } from './countdown/countdown.js';

const DailyForecast: React.FC = () =>{
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
                <h2 className={styles["daily-forecast__day"]}>Sunday</h2>
                <div className={styles["daily-forecast__value"]}>
                    <div className={styles["daily-forecast__weather-icon"]}>
                        <img src={rainyIcon} alt="" />
                    </div>
                    <div className={styles["daily-forecast__temperature"]}>
                        24<sup>°C</sup>
                    </div>
                    
                </div>
                <div className={styles["daily-forecast__city"]}>
                        Berlin
                    </div>
            </div>
            <Countdown time={new Date('2024-03-02T12:00:00')}/>
        </div>

}

export  { DailyForecast };
