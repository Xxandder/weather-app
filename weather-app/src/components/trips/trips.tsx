import { AddTripButton } from './add-trip-button/add-trip-button';
import { TripsList } from './trips-list/trips-list';
import { cities } from '~/libs/constants/constants.js';
import styles from './styles.module.scss';
import { type TripData } from '~/libs/types/types.js';

type Properties = {
    onAddTripButtonClick: (...args: any) => any;
    trips: TripData[]
}

const Trips: React.FC<Properties> = ({onAddTripButtonClick, trips}) =>{
    const berlin = cities[0]
    const startDate = '28.02.2024';
    const endDate = '30.02.2024';

  return <>
        <div className={styles["trips"]}>
            <div className={styles["trips__list-container"]}>
                <TripsList trips={trips}/>
            </div>
           
            <AddTripButton onClick={onAddTripButtonClick}/>    
        </div>
       
  </>;
}

export  {Trips};
