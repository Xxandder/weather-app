import berlinImage from '~/assets/images/berlin.jpg';
import warsawImage from '~/assets/images/warsaw.jpg';
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
        id: 1,
        city: {
            name: 'Warsaw', 
            image: warsawImage,
        },
        startDate: new Date(),
        endDate: new Date((new Date()).getDate() + 5)
    }
]


const API_ROOT_PATH = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline'

const daysOfWeek = [
    'Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday'
];

export { cities, tripsList, API_ROOT_PATH, daysOfWeek };