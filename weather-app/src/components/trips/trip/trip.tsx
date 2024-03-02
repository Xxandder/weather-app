import { type TripData } from '~/libs/types/trip-data.type';
import styles from './styles.module.scss';
import { convertDateToString } from '~/libs/helpers/convert-date-to-string.helper';
import clsx from 'clsx'

type Properties = {
    trip: TripData,
    onClick: (...args: any) => void;
    isActive: boolean;
}

const Trip: React.FC<Properties> = (props) =>{
    const { city, startDate, endDate, id } = props.trip;
    const handleTripClick = () => {
        props.onClick(id);
    }

    return <div className={clsx(styles['trip'],
                            props.isActive && styles['trip_active'])}
             onClick={handleTripClick}>
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
  