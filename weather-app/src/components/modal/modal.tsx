import { useRef } from "react";
import styles from './styles.module.scss';
import closeIcon from '~/assets/icons/close-icon.svg';

const Modal: React.FC = () => {
    const modalRef = useRef<HTMLDialogElement>(null);

  return (
    <dialog ref={modalRef}>
        <div className={styles['overlay']}>
            <div className={styles['modal']}>
                <div className={styles["modal__close-icon-container"]}>
                    <img src={closeIcon} alt="" />
                </div>
                <h2 className={styles['modal__header']}>
                    Create Trip
                </h2>
                <form action="" className={styles['modal__form']}>
                    <label className={styles['modal__input']}>
                        City
                        <select name="" id="">
                            <option value="Berlin">Berlin</option>
                        </select>
                    </label>
                    <label className={styles['modal__input']}>
                        Start date
                        <input type="date" />
                    </label>
                    <label className={styles['modal__input']}>
                        End date
                        <input type="date" />
                    </label>
                    
                </form>
                <footer className={styles["modal__footer"]}>
                        <button className={styles["modal__close"]}>Cancel</button>
                        <input type="submit" className={styles["modal__save"]} />
                </footer>
            </div>
        </div>
    </dialog>
  )
}

export { Modal };
