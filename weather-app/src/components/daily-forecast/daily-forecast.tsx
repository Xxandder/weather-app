import styles from './styles.module.scss';
import rainyIcon from '~/assets/icons/weather/rainy.svg';

const DailyForecast: React.FC = () =>{
  return <div className={styles['daily-forecast']}>
            <div className="daily-forecast__info">
                <h2 className="daily-forecast__day">Sunday</h2>
                <div className="daily-forecast__value">
                    <div className="daily-forecast__weather-icon">
                        <img src={rainyIcon} alt="" />
                    </div>
                    <div className="daily-forecast__temperature">
                        24<span>C</span>
                    </div>
                    <div className="daily-forecast__city">
                        Berlin
                    </div>
                </div>
            </div>
        </div>

}

export  { DailyForecast };
