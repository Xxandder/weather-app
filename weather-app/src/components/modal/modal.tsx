import { ChangeEvent, useCallback, useRef, useState } from "react";
import styles from './styles.module.scss';
import closeIcon from '~/assets/icons/close-icon.svg';
import clsx from 'clsx'
import { convertDateToString } from "~/libs/helpers/helpers.js";
import { DAYS_FOR_TRIP_RANGE } from "./libs/constants/constants";
import { SubmitHandler, useForm } from "react-hook-form";

type Properties = {
    onClose: () => void;
    onSubmit: () => void;
    cities: string[]
}

type FormData = {
    city: string;
    startDate: Date;
    endDate: Date;
  }

const Modal: React.FC<Properties> = ({onClose, onSubmit, cities}) => {

    const modalRef = useRef<HTMLDialogElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    const { register, handleSubmit, formState: { isValid, errors } } = useForm<FormData>();

    const [startDateValue, setStartDateValue] = useState<Date | null>(null);

    const handleStartDateChanged = useCallback(
        (event: ChangeEvent<HTMLInputElement>)=>{
        setStartDateValue(new Date(event.target.value))
    }, [startDateValue])

    const handleSaveClick = () => {
        console.log(errors)
        if (formRef.current && isValid) {
            handleSubmit(onSubmit)();
        }
    }
    const currentDate = convertDateToString(new Date);

    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + DAYS_FOR_TRIP_RANGE);
    const maxDate = convertDateToString(futureDate);

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

                <form onSubmit={handleSubmit(onSubmit)} ref={formRef} action="" className={styles['modal__form']}>
                    <label className={styles['modal__input']}>
                        <p><sup>*</sup>City</p>
                        <select {...register('city', {
                                required: true,
                              })}  name="" id="">
                            {cities.map(city=>{
                                return <option value={city}>{city}</option>
                            })}
                            
                        </select>
                        {errors['city'] && <span className="modal__error-message">{errors['city'].message}</span>}
                    </label>
                    <label className={styles['modal__input']}>
                        <p><sup>*</sup>Start Date</p>
                        <input {...register('startDate', {
                                required: true,
                              })}  type="date"  min={currentDate} max={maxDate}
                            onChange={handleStartDateChanged}/>
                            {errors['startDate'] && <span className="modal__error-message">{errors['startDate']?.message}</span>}
                    </label>
                    <label className={styles['modal__input']}>
                        <p><sup>*</sup>End Date</p>
                        <input {...register('endDate', {
                                required: true,
                              })}  type="date" disabled={!Boolean(startDateValue)}
                        min={startDateValue ? convertDateToString(startDateValue) :  currentDate }
                        max={maxDate}/>
                        {errors['endDate'] && <span className="modal__error-message">{errors['endDate']?.message}</span>}
                    </label>
                    
                </form>
                <footer className={styles["modal__footer"]}>
                        <button className={clsx(styles["modal__close"],
                        styles["modal__button"]
                        )} onClick={onClose}>Cancel</button>
                        <button className={clsx(styles["modal__save"],
                        styles["modal__button"],
                        )} onClick={handleSaveClick}>Save</button>
                </footer>
            </div>
        </div>
    </dialog>
  )
}

export { Modal };
