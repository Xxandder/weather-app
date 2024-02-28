import styles from './styles.module.scss';
import { getTimeDifference } from './libs/helpers/helpers.js';

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
    const { days, hours, minutes, seconds } = getTimeDifference(time);


    return <div className={styles['countdown']}>
            <CountdownBlock value={days} name={TimeValueType.DAYS}/>
            <CountdownBlock value={hours} name={TimeValueType.HOURS}/>
            <CountdownBlock value={minutes} name={TimeValueType.MINUTES}/>
            <CountdownBlock value={seconds} name={TimeValueType.SECONDS}/>
        </div>;
  }
  
  export { Countdown };
  