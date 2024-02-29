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
                <div className={styles['modal__header']}>
                    Create Trip
                </div>
                <form action="" className={styles['model__form']}>
                    <label className={styles['model__input']}>
                        City
                        <select name="" id="">
                            <option value="Berlin">Berlin</option>
                        </select>
                    </label>
                    <label className={styles['model__input']}>
                        Start date
                        <input type="date" />
                    </label>
                    <label className={styles['model__input']}>
                        End date
                        <input type="date" />
                    </label>
                    <footer className={styles["model__footer"]}>
                        <button className={styles["modal__close"]}></button>
                        <input type="submit" className={styles["modal__save"]} />
                    </footer>
                </form>
            </div>
        </div>
    </dialog>
  )
}

export { Modal };
