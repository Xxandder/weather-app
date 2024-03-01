import { replaceTemplateWithValues } from "../helpers/replace-template-with-values.helper";
import { API_ROOT_PATH } from "../constants/constants";
import { convertDateToString } from "../helpers/convert-date-to-string.helper";


class ForecastApi {
    private apiKey: string;

    public constructor(apiKey: string){
        this.apiKey = apiKey;
    }

    public async getForecastForDaysRange(
        startDate: Date, endDate: Date, city: string){
            const datesInRange = [];
            let template = `${API_ROOT_PATH}/{location}`;
            const replacements: Record<string ,string> = {};
            let dateIndex = 0;
            for (let currentDate = new Date(startDate); currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
                datesInRange.push(new Date(currentDate));
                template += `/{date${dateIndex}}`;
                replacements[`date${dateIndex}`] = `${convertDateToString(currentDate)}`;
            }

            let url = replaceTemplateWithValues(template, replacements);
            url += new URLSearchParams({
                key: this.apiKey
            })

            try {
                const response = await fetch(url);
                if (!response.ok) {
                  throw new Error('Error in response');
                }
                const data = await response.json();
                console.log('Data:', data);
              } catch (error) {
                console.error(error);
              }
        }
}

export { ForecastApi };