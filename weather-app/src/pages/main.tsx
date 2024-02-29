import { ChangeEvent, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { DailyForecast, TripForecast, Trips, Modal } from '../components/components.js';
import searchIcon from '~/assets/icons/search.svg';
import { tripsForecast } from '../libs/constants/constants.js';
import clsx from 'clsx'
import styles from './styles.module.scss';
import { cities, tripsList } from '../libs/constants/constants.js';
import { type TripData } from '~/libs/types/trip-data.type.js';

type FormData = {
    city: string;
    startDate: Date;
    endDate: Date;
}

const MainPage: React.FC = () => {
    const [name, setName] = useState('');

    const [showModal, setShowModal] = useState<boolean>(false);

    const [trips, setTrips] = useState<TripData[]>([...tripsList]);

    const handleInputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
        console.log(name);
    }

    const toggleModal = useCallback(()=>{
        setShowModal(!showModal)
    }, [showModal])

    const addTrip = useCallback((trip: FormData) => {
        setTrips([...trips, {
            city: {
                name: trip.city,
                image: cities.find(city=>city.name===trip.city)?.image ?? ''
            },
            startDate: trip.startDate,
            endDate: trip.endDate
        }])
    }, [trips])

    return (
        <div className="_container">
            {showModal && <Modal cities={cities.map(city=>city.name)} 
            onClose={toggleModal} onSubmit={(trip: TripData)=>addTrip}/>}
            <div className={styles['main-page']}>
                <main className={styles['main']}>
                    <h1 className={styles['main__header']}>Weather Forecast</h1>
                    <div className={clsx(styles["main__find-by-name"],
                                        styles["find-by-name"])}>         
                            <img src={searchIcon} alt="" />
                            <input type="text" value={name} onChange={handleInputOnChange} placeholder='Search your trip'/>
                    </div>
                    <Trips trips={trips} onAddTripButtonClick={toggleModal}/>
                    <TripForecast tripForecast={tripsForecast}/>
                </main>
                <DailyForecast/>
                
            </div>
        </div>
    )
    }

export { MainPage };