import styles from './styles.module.scss';
import rainyIcon from '~/assets/icons/weather/rainy.svg';

const DailyForecast: React.FC = () =>{
  return <div className={styles['daily-forecast']}>
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
        </div>

}

export  { DailyForecast };
