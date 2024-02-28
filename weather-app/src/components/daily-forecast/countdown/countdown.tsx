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
    

    return <div className="countdown__block">
        <h2 className="countdown__value">{value}</h2>
        <p className="countdown__block-name">{name}</p>
    </div>
}

const AddTripButton: React.FC<Properties> = ({time}) =>{
    const { days, hours, minutes, seconds } = getTimeDifference(time);


    return <div>
            <CountdownBlock value={days} name={TimeValueType.DAYS}/>
            <CountdownBlock value={hours} name={TimeValueType.HOURS}/>
            <CountdownBlock value={minutes} name={TimeValueType.MINUTES}/>
            <CountdownBlock value={seconds} name={TimeValueType.SECONDS}/>
        </div>;
  }
  
  export { AddTripButton };
  