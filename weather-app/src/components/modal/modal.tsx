import { useRef } from "react";
import styles from './styles.module.scss';
import closeIcon from '~/assets/icons/close-icon.svg';
import clsx from 'clsx'

type Properties = {
    onClose: () => void;
    cities: string[]
}

const Modal: React.FC<Properties> = ({onClose, cities}) => {
    const modalRef = useRef<HTMLDialogElement>(null);

    return (
    <dialog ref={modalRef}>
        <div className={styles['overlay']}>
            <div className={styles['modal']}>
                <div className={styles["modal__header-container"]}>
                    <div className={styles["modal__close-icon-container"]} onClick={onClose}>
                        <img src={closeIcon} alt="" />
                    </div>
                    <h2 className={styles['modal__header']}>
                        Create Trip
                    </h2>
                </div>

                <form action="" className={styles['modal__form']}>
                    <label className={styles['modal__input']}>
                        <p><sup>*</sup>City</p>
                        <select name="" id="">
                            {cities.map(city=>{
                                return <option value={city}>{city}</option>
                            })}
                            
                        </select>
                    </label>
                    <label className={styles['modal__input']}>
                        <p><sup>*</sup>Start Date</p>
                        <input type="date" />
                    </label>
                    <label className={styles['modal__input']}>
                        <p><sup>*</sup>End Date</p>
                        <input type="date" />
                    </label>
                    
                </form>
                <footer className={styles["modal__footer"]}>
                        <button className={clsx(styles["modal__close"],
                        styles["modal__button"]
                        )} onClick={onClose}>Cancel</button>
                        <button className={clsx(styles["modal__save"],
                        styles["modal__button"]
                        )}>Save</button>
                </footer>
            </div>
        </div>
    </dialog>
  )
}

export { Modal };
