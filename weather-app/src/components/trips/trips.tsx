import { AddTripButton } from './add-trip-button/add-trip-button';
import { TripsList } from './trips-list/trips-list';
import { cities } from '~/libs/constants/constants.js';
import styles from './styles.module.scss';
import { type TripData } from '~/libs/types/types.js';

type Properties = {
    onAddTripButtonClick: (...args: any) => void;
    onTripClicked: (...args: any) => void;
    trips: TripData[],
    activeId: number
}

const Trips: React.FC<Properties> = ({onAddTripButtonClick, onTripClicked, trips, activeId}) =>{
  return <>
        <div className={styles["trips"]}>
            <div className={styles["trips__list-container"]}>
                <TripsList activeId={activeId} trips={trips} onTripClicked={onTripClicked}/>
            </div>
           
            <AddTripButton onClick={onAddTripButtonClick}/>    
        </div>
       
  </>;
}

export  {Trips};
