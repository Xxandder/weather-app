import { type TripData } from '~/libs/types/trip-data.type';
import styles from './styles.module.scss';
import { convertDateToString } from '~/libs/helpers/convert-date-to-string.helper';

const Trip: React.FC<TripData> = (props) =>{
    const { city, startDate, endDate } = props;

    return <div className={styles['trip']}>
        <div className={styles['trip__image-container']}>
            <img src={city.image} alt={city.name} />
        </div>
        <div className={styles["trip__info"]}>
            <h2 className={styles['trip__city']}>{city.name}</h2>
            <p className={styles['trip__dates']}>{convertDateToString(startDate)} - {convertDateToString(endDate)}</p>
        </div>
    </div>;
  }
  
  export { Trip };
  