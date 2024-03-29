import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { DailyForecast, TripForecast, Trips, Modal } from '../components/components.js';
import searchIcon from '~/assets/icons/search.svg';
import clsx from 'clsx'
import styles from './styles.module.scss';
import { cities, tripsList } from '../libs/constants/constants.js';
import { type TripData, type FormData, type DailyForecastData } from '~/libs/types/types.js';
import { forecastApi } from '~/libs/api/forecast-api.js';
import { convertDateToString } from '~/libs/helpers/helpers.js';

const MainPage: React.FC = () => {
    const [searchValue, setSearchValue] = useState('');

    const [showModal, setShowModal] = useState<boolean>(false);

    const [trips, setTrips] = useState<TripData[]>([...tripsList]);

    const [currentTrip, setCurrentTrip] = useState<number | null>(trips[0].id ?? null);

    const [currentTripForecast, setCurrentTripForecast] = useState<DailyForecastData[]>([]);

    const [currentTripTodaysForecast, setCurrentTripTodaysForecast] = useState<DailyForecastData | null>(null);

    const handleInputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    }

    const toggleModal = useCallback(()=>{
        setShowModal(!showModal)
    }, [showModal])

    const addTrip = (trip: FormData) => {
        const newTrip = {
            id: trips[trips.length-1].id + 1,
            city: {
                name: trip.city,
                image: cities.find(city=>city.name===trip.city)?.image ?? ''
            },
            startDate: new Date(trip.startDate),
            endDate: new Date(trip.endDate)
        }
        setTrips([...trips, newTrip]);
        setForecastForTrip(newTrip);
    }

    const setForecastForTrip = async (trip: TripData) => {
        setCurrentTrip(trip.id);
        const tripForecast = await forecastApi.getForecastForDaysRange(trip.startDate,
            trip.endDate,trip.city.name);
        if(tripForecast){
            setCurrentTripForecast(tripForecast)
        };
        setForecastForCurrentDayInTripCity(trip);
    }

    const setForecastForCurrentDayInTripCity = async (trip: TripData) =>{
        const tripForecastCurrentDay = await forecastApi.getForecastForDate(
            new Date(), trip.city.name);
        if(tripForecastCurrentDay)
            setCurrentTripTodaysForecast(tripForecastCurrentDay[0]);
    }

    const handleTripClick = useCallback(async (id: number) =>{
            setForecastForTrip(trips[id]);
        }, [trips, currentTripForecast])

    useEffect(()=>{
        setForecastForTrip(trips[0]);
    }, [])

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
                            <input type="text" value={searchValue} onChange={handleInputOnChange} placeholder='Search your trip'/>
                    </div>
                    <Trips
                     activeId={currentTrip ?? 0} 
                     trips={trips.filter(trip=>{
                        return (trip.city.name.toLowerCase().includes(searchValue) ||
                                convertDateToString(trip.startDate).toLowerCase().includes(searchValue))
                    })} 
                     onAddTripButtonClick={toggleModal} onTripClicked={handleTripClick}/>
                    <TripForecast tripForecast={currentTripForecast}/>
                </main>
                {currentTripTodaysForecast &&
                 <DailyForecast
                  forecast={currentTripTodaysForecast}
                   city={trips[currentTrip as number].city.name}
                   startTripDate={trips[currentTrip as number].startDate}/>}
            </div>
        </div>
    )
    }

export { MainPage };