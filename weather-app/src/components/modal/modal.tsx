import { useRef } from "react";
import styles from './styles.module.scss';
import closeIcon from '~/assets/icons/close-icon.svg';

const Modal: React.FC = () => {
    const modalRef = useRef<HTMLDialogElement>(null);

  return (
    <dialog ref={modalRef}>
        <div className={styles['overlay']}>
            <div className={styles['modal']}>
                <div className={styles["modal__header-container"]}>
                    <div className={styles["modal__close-icon-container"]}>
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
                            <option value="Berlin">Berlin</option>
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
                        <button className={styles["modal__close"]}>Cancel</button>
                        <button className={styles["modal__save"]}>Save</button>
                </footer>
            </div>
        </div>
    </dialog>
  )
}

export { Modal };
