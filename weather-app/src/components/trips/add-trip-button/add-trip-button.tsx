import styles from './styles.module.scss';
import plusIcon from '~/assets/icons/plus-icon.svg';
import { clsx } from 'clsx'

type Properties = {
    onClick?: ((event_: React.MouseEvent) => void)
}

const AddTripButton: React.FC<Properties> = ({onClick}) =>{
    return <div className={clsx(
            styles['add-trip-button'], 
            styles['trips__add-trip-button']
        )} onClick={onClick}>
            <div className={styles['add-trip-button__icon']}>
                <img src={plusIcon} alt="plusIcon" />
            </div>
            <h2 className={styles['add-trip-button__text']}>Add trip</h2>
        </div>;
  }
  
  export { AddTripButton };
  