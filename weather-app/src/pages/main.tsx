import { ChangeEvent, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { DailyForecast, TripForecast, Trips, Modal } from '../components/components.js';
import searchIcon from '~/assets/icons/search.svg';
import clsx from 'clsx'
import styles from './styles.module.scss';
import { cities, tripsList } from '../libs/constants/constants.js';
import { type TripData, type FormData, type DailyForecastData } from '~/libs/types/types.js';
import { forecastApi } from '~/libs/api/forecast-api.js';


const MainPage: React.FC = () => {
    const [name, setName] = useState('');

    const [showModal, setShowModal] = useState<boolean>(false);

    const [trips, setTrips] = useState<TripData[]>([...tripsList]);

    const [currentTrip, setCurrentTrip] = useState<number | null>(trips[0].id ?? null);

    const [currentTripForecast, setCurrentTripForecast] = useState<DailyForecastData[]>([]);

    const handleInputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }
    const toggleModal = useCallback(()=>{
        setShowModal(!showModal)
    }, [showModal])

    const addTrip =(trip: FormData) => {
        const newTrip = {
            id: trips[trips.length-1].id + 1,
            city: {
                name: trip.city,
                image: cities.find(city=>city.name===trip.city)?.image ?? ''
            },
            startDate: new Date(trip.startDate),
            endDate: new Date(trip.endDate)
        }
        setTrips([...trips, newTrip])
    }

    const handleTripClick = useCallback(async (id: number) =>{
        setCurrentTrip(id);
        const tripForecast = await forecastApi.getForecastForDaysRange(trips[id].startDate,
            trips[id].endDate,trips[id].city.name);
            
        if(tripForecast){
            setCurrentTripForecast(tripForecast)
        }
            
        }, [trips, currentTripForecast])

    return (
        <div className="_container">
            {showModal && <Modal cities={cities.map(city=>city.name)} 
            onClose={toggleModal} onSubmit={addTrip}/>}
            <div className={styles['main-page']}>
                <main className={styles['main']}>
                    <h1 className={styles['main__header']}>Weather Forecast</h1>
                    <div className={clsx(styles["main__find-by-name"],
                                        styles["find-by-name"])}>         
                            <img src={searchIcon} alt="" />
                            <input type="text" value={name} onChange={handleInputOnChange} placeholder='Search your trip'/>
                    </div>
                    <Trips activeId={currentTrip ?? 0} trips={trips} onAddTripButtonClick={toggleModal} onTripClicked={handleTripClick}/>
                    <TripForecast tripForecast={currentTripForecast}/>
                </main>
                <DailyForecast/>
                
            </div>
        </div>
    )
    }

export { MainPage };