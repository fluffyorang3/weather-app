import {classAssigner, idAssigner} from "./contentAssigner.js";
import weatherFetcher from "./weatherFetcher.js";

const handler = function submitHandler() {
    
    function newLocation(result) {
        return {
            'condition': result.current.condition.text,
            'icon': result.current.condition.icon,
            'degree-c': result.current.temp_c,
            'location': result.location.name,
            'maxtemp1': result.forecast.forecastday[0].day.maxtemp_c,
            'mintemp1': result.forecast.forecastday[0].day.mintemp_c,
            'maxtemp2': result.forecast.forecastday[1].day.maxtemp_c,
            'mintemp2': result.forecast.forecastday[1].day.mintemp_c,
            'condition2': result.forecast.forecastday[1].day.condition.text,
            'icon2': result.forecast.forecastday[1].day.condition.icon,
            'maxtemp3': result.forecast.forecastday[2].day.maxtemp_c,
            'mintemp3': result.forecast.forecastday[2].day.mintemp_c,
            'condition3': result.forecast.forecastday[2].day.condition.text,
            'icon3': result.forecast.forecastday[2].day.condition.icon,
            'date3': result.forecast.forecastday[2].date,
            'maxtemp4': result.forecast.forecastday[3].day.maxtemp_c,
            'mintemp4': result.forecast.forecastday[3].day.mintemp_c,
            'condition4': result.forecast.forecastday[3].day.condition.text,
            'icon4': result.forecast.forecastday[3].day.condition.icon,
            'date4': result.forecast.forecastday[3].date,
        }
    }
    
    const form = idAssigner().locationForm

    form.addEventListener("submit", (e) => {
        e.preventDefault()

        let submittedLocation = document.getElementById('location').value

        console.log(submittedLocation)

        const weatherJSON = weatherFetcher(submittedLocation)

        weatherJSON.then(
            (result) => {
                console.log(result)
                console.log(classAssigner())
                const mmm = newLocation(result)
                console.log(mmm)
            },
            (error) => {
                console.error(error)
            }
        )
        


    })
}

handler()



export default handler






