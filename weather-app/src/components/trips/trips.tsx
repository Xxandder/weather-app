import { AddTripButton } from './add-trip-button/add-trip-button';
import { TripsList } from './trips-list/trips-list';
import { cities } from '~/libs/constants/constants.js';
import styles from './styles.module.scss';

type Properties = {
    onAddTripButtonClick: (...args: any) => any;
}

const Trips: React.FC<Properties> = ({onAddTripButtonClick}) =>{
    const berlin = cities[0]
    const startDate = '28.02.2024';
    const endDate = '30.02.2024';

  return <>
        <div className={styles["trips"]}>
            <div className={styles["trips__list-container"]}>
                <TripsList cities={[{...berlin, startDate, endDate},
                {...berlin, startDate, endDate},
                {...berlin, startDate, endDate},
                {...berlin, startDate, endDate}]}/>
            </div>
           
            <AddTripButton onClick={onAddTripButtonClick}/>    
        </div>
       
  </>;
}

export  {Trips};
