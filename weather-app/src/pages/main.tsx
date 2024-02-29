import { ChangeEvent, useCallback, useState } from 'react';
import { DailyForecast, TripForecast, Trips, Modal } from '../components/components.js';
import searchIcon from '~/assets/icons/search.svg';
import { tripsForecast } from '../libs/constants/constants.js';
import clsx from 'clsx'
import styles from './styles.module.scss';
import { cities } from '../libs/constants/constants.js';

const MainPage: React.FC = () => {
    const [name, setName] = useState('');

    const handleInputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
        console.log(name);
    }

    const [showModal, setShowModal] = useState<boolean>(true);

    const toggleModal = useCallback(()=>{
        setShowModal(!showModal)
    }, [showModal])

    return (
        <div className="_container">
            {showModal && <Modal cities={cities.map(city=>city.name)} onClose={toggleModal}/>}
            <div className={styles['main-page']}>
                <main className={styles['main']}>
                    <h1 className={styles['main__header']}>Weather Forecast</h1>
                    <div className={clsx(styles["main__find-by-name"],
                                        styles["find-by-name"])}>         
                            <img src={searchIcon} alt="" />
                            <input type="text" value={name} onChange={handleInputOnChange} placeholder='Search your trip'/>
                    </div>
                    <Trips onAddTripButtonClick={toggleModal}/>
                    <TripForecast tripForecast={tripsForecast}/>
                </main>
                <DailyForecast/>
                
            </div>
        </div>
    )
    }

export { MainPage };
