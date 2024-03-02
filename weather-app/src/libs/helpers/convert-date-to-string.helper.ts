// convert date to string with format: 'yyyy-mm-dd'

const convertDateToString = (date: Date) => {
    return date.toISOString().split('T')[0];
}

export { convertDateToString };