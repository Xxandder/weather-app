const SECONDS_IN_MINUTE = 60;
const SECONDS_IN_HOUR = 60 * 60;
const SECONDS_IN_DAY = 60 * 60 * 24;

const getTimeDifference = (date: Date) => {
    const currentDate = new Date();

    const differenceInSeconds = (
        date.getTime() - currentDate.getTime()) / 1000;
    const days = Math.floor(differenceInSeconds / SECONDS_IN_DAY);
    const hours = Math.floor(
        (differenceInSeconds - days*SECONDS_IN_DAY) / SECONDS_IN_HOUR);
    const minutes = Math.floor(
            (differenceInSeconds -
             days*SECONDS_IN_DAY - 
             hours*SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
    const seconds = Math.floor(
            (differenceInSeconds -
            days*SECONDS_IN_DAY - 
            hours*SECONDS_IN_HOUR -
            minutes*SECONDS_IN_MINUTE));

    return { days, hours, minutes, seconds };
}

export { getTimeDifference };