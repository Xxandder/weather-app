import { type TripData } from "~/libs/types/trip-data.type";
import { Trip } from "../trip/trip";
import styles from './styles.module.scss';

type Properties = {
    trips: TripData[]
}

const TripsList: React.FC<Properties> = ({trips}) =>{

  return <>
        <div className={styles["trips__list"]}>
        {trips.map(trip=><Trip {...trip}/>)}
        </div>
        
  </>;
}

export  {TripsList};
