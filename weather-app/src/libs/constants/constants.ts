import berlinImage from '~/assets/images/berlin.jpg';
import warsawImage from '~/assets/images/berlin.jpg';
import pragueImage from '~/assets/images/berlin.jpg';
import cloudIcon from '~/assets/icons/cloud.svg'
import { TripData } from '../types/trip-data.type';

const cities = [
    {name: 'Berlin', image: berlinImage},
    {name: 'Warsaw', image: warsawImage},
    {name: 'Prague', image: pragueImage}
] as const;

const tripsList: TripData[] = [
    {
        city: {
            name: 'Berlin', 
            image: berlinImage,
        },
        startDate: new Date(),
        endDate: new Date((new Date()).getDate() + 5)
    }
]

const tripsForecast = [
    {
        dayOfTheWeek: 'Monday',
        icon: cloudIcon,
        date: '28.02.2024',
        minTemperature: 15,
        maxTemperature: 16
    },
    {
        dayOfTheWeek: 'Tuesday',
        icon: cloudIcon,
        date: '28.02.2024',
        minTemperature: 20,
        maxTemperature: 25
    },

    {
        dayOfTheWeek: 'Tuesday',
        icon: cloudIcon,
        date: '28.02.2024',
        minTemperature: 20,
        maxTemperature: 25
    },

    {
        dayOfTheWeek: 'Tuesday',
        icon: cloudIcon,
        date: '28.02.2024',
        minTemperature: 20,
        maxTemperature: 25
    },

    {
        dayOfTheWeek: 'Tuesday',
        icon: cloudIcon,
        date: '28.02.2024',
        minTemperature: 20,
        maxTemperature: 25
    },

    {
        dayOfTheWeek: 'Tuesday',
        icon: cloudIcon,
        date: '28.02.2024',
        minTemperature: 20,
        maxTemperature: 25
    },
    {
        dayOfTheWeek: 'Tuesday',
        icon: cloudIcon,
        date: '28.02.2024',
        minTemperature: 20,
        maxTemperature: 25
    },
    {
        dayOfTheWeek: 'Tuesday',
        icon: cloudIcon,
        date: '28.02.2024',
        minTemperature: 20,
        maxTemperature: 25
    },
    {
        dayOfTheWeek: 'Tuesday',
        icon: cloudIcon,
        date: '28.02.2024',
        minTemperature: 20,
        maxTemperature: 25
    },
]



export { cities, tripsForecast, tripsList };