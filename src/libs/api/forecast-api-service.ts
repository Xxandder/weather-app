import { replaceTemplateWithValues } from "../helpers/replace-template-with-values.helper";
import { API_ROOT_PATH } from "../constants/constants";
import { convertDateToString } from "../helpers/convert-date-to-string.helper";
import { tripForecastResponseToTripForecastData } from "../mappers/mappers";


class ForecastApi {
    private apiKey: string;

    public constructor(apiKey: string){
        this.apiKey = apiKey;
    }

    public async getForecastForDaysRange(
        startDate: Date, endDate: Date, city: string){
            let template = `${API_ROOT_PATH}/{location}/{startDate}/{endDate}`;
            const replacements: Record<string ,string> = {};
            replacements['location'] = city;
            replacements['startDate'] = convertDateToString(startDate);
            replacements['endDate'] = convertDateToString(endDate);
            
            let url = replaceTemplateWithValues(template, replacements);
            url += `?${new URLSearchParams({
                key: this.apiKey
            })}`

            try {
                const response = await fetch(url);
                if (!response.ok) {
                  throw new Error('Error in response');
                }
                const data = await response.json();
                return tripForecastResponseToTripForecastData(data);
              } catch (error) {
                console.error(error);
              }
        }

        public async getForecastForDate(
            date: Date, city: string){
                let template = `${API_ROOT_PATH}/{location}/{date}`;
                const replacements: Record<string ,string> = {};
                replacements['location'] = city;
                replacements['date'] = convertDateToString(date);
                
                let url = replaceTemplateWithValues(template, replacements);
                url += `?${new URLSearchParams({
                    key: this.apiKey
                })}`
    
                try {
                    const response = await fetch(url);
                    if (!response.ok) {
                      throw new Error('Error in response');
                    }
                    const data = await response.json();
                    return tripForecastResponseToTripForecastData(data);
                  } catch (error) {
                    console.error(error);
                  }
            }
}

export { ForecastApi };