import styles from './styles.module.scss';
import { getTimeDifference } from './libs/helpers/helpers.js';
import { useEffect, useState } from 'react';

type Properties = {
    time: Date;
}

type CountdownBlockProperties = {
    value: number;
    name: string;
}

const TimeValueType = {
    DAYS: 'days',
    HOURS: 'hours',
    MINUTES: 'minutes',
    SECONDS: 'seconds'
} as const;

const CountdownBlock: React.FC<CountdownBlockProperties> = ({value, name}) => {
    

    return <div className={styles["countdown__block"]}>
        <h2 className={styles["countdown__value"]}>{value}</h2>
        <p className={styles["countdown__block-name"]}>{name}</p>
    </div>
}

const Countdown: React.FC<Properties> = ({time}) =>{
    const [timeLeft, setTimeLeft] = useState(getTimeDifference(time));

    useEffect(() => {
        setInterval(() => {
            setTimeLeft(getTimeDifference(time));
        }, 1000)})
        
    return <div className={styles['countdown']}>
            <CountdownBlock value={timeLeft.days} name={TimeValueType.DAYS}/>
            <CountdownBlock value={timeLeft.hours} name={TimeValueType.HOURS}/>
            <CountdownBlock value={timeLeft.minutes} name={TimeValueType.MINUTES}/>
            <CountdownBlock value={timeLeft.seconds} name={TimeValueType.SECONDS}/>
        </div>;
  }
  
  export { Countdown };
  