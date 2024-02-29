import { type TripData } from "~/libs/types/trip-data.type";
import { Trip } from "../trip/trip";
import styles from './styles.module.scss';

type Properties = {
    trips: TripData[];
    onTripClicked: (...args: any) => void;
}

const TripsList: React.FC<Properties> = ({onTripClicked, trips}) =>{

  return <>
        <div className={styles["trips__list"]}>
        {trips.map(trip=><Trip trip={trip} key={trip.id}
            onClick={onTripClicked}/>)}
        </div>
        
  </>;
}

export  {TripsList};
