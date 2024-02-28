import styles from './styles.module.scss';

type Properties = {
    name: string;
    image: string;
    startDate: string;
    endDate: string;
}

const Trip: React.FC<Properties> = (props) =>{
    const { name, image, startDate, endDate } = props;

    return <div className={styles['trip']}>
        <div className={styles['trip__image-container']}>
            <img src={image} alt={name} />
        </div>
        <div className={styles["trip__info"]}>
            <h2 className={styles['trip__city']}>{name}</h2>
            <p className={styles['trip__dates']}>{startDate} - {endDate}</p>
        </div>
    </div>;
  }
  
  export { Trip };
  