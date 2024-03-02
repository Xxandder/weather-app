import { type TripData } from "~/libs/types/trip-data.type";
import { Trip } from "../trip/trip";
import styles from './styles.module.scss';

type Properties = {
    trips: TripData[];
    onTripClicked: (...args: any) => void;
    activeId: number;
}

const TripsList: React.FC<Properties> = ({onTripClicked, trips, activeId}) =>{

  return <>
        <div className={styles["trips__list"]}>
        {trips.map(trip=><Trip trip={trip} key={trip.id}
            onClick={onTripClicked}
            isActive={activeId===trip.id}/>)}
        </div>
        
  </>;
}

export  {TripsList};
