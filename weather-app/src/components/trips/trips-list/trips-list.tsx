import { Trip } from '../trip/trip.js';
import { AddTripButton } from '../add-trip-button/add-trip-button.js';
import styles from './styles.module.scss';

type City = {
    name: string;
    image: string;
    startDate: string;
    endDate: string;
}

type Properties = {
    cities: City[]
}

const TripsList: React.FC<Properties> = ({cities}) =>{


  return <>
        <div className={styles["trips__list"]}>
        {cities.map(city=><Trip {...city}/>)}
        <AddTripButton/>
        </div>
        
  </>;
}

export  {TripsList};
