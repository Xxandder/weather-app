import styles from './styles.module.scss';
import { type DailyForecastData } from '~/libs/types/daily-forecast-data.type'

type Properties = {
    tripForecast: DailyForecastData[]
}


const TripForecast: React.FC<Properties> = (props) =>{ 
    return <div className={styles['trip-forecast']}>
        {
            props.tripForecast.map(dailyForecast => {
                return <div className={styles['trip-forecast__day']}>
                    <h3 className={styles["trip-forecast__day-name"]}>
                        {dailyForecast.weekday}
                    </h3>
                    <p className={styles["trip-forecast__date"]}>
                    {dailyForecast.date}
                    </p>
                    <div className={styles["trip-forecast__icon-container"]}>
                        <img src={dailyForecast.iconLink} alt="" />
                    </div>
                    <div className={styles["trip-forecast__temperature"]}>
                        {dailyForecast.minimumTemperature}<sup>°C</sup> - {dailyForecast.maximumTemperature}<sup>°C</sup>
                         
                    </div>
                </div>
            })
        }
    </div>
  }
  
  export { TripForecast };
  