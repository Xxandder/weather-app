import styles from './styles.module.scss';

type Properties = {
    dayOfTheWeek: string;
    icon: string;
    minTemperature: string;
    maxTemperature: string;
}


const TripForecast: React.FC<Properties[]> = (props) =>{
    return <div className={styles['trip-forecast']}>
        {
            props.map(dailyForecast => {
                return <div className={styles['trip-forecast__day']}>
                    <h3 className={styles["trip-forecast__day-name"]}>
                        {dailyForecast.dayOfTheWeek}
                    </h3>
                    <div className={styles["trip-forecast__icon-container"]}>
                        <img src={dailyForecast.icon} alt="" />
                    </div>
                    <div className={styles["trip-forecast__temperature"]}>
                        {dailyForecast.minTemperature}<sup>°C</sup> -
                        {dailyForecast.maxTemperature}<sup>°C</sup>
                    </div>
                </div>
            })
        }
    </div>
  }
  
  export { TripForecast };
  