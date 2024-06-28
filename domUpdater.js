import {classAssigner, idAssigner} from "./contentAssigner.js";
import weatherFetcher from "./weatherFetcher.js";

const handler = function submitHandler() {
    
    function mapLocation(result) {
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
                console.log(idAssigner())
                const createLocation= mapLocation(result)
                console.log(createLocation)
                
                classAssigner().condition.textContent = createLocation.condition
                classAssigner()['day-forecast-icon'].style.backgroundImage = `url(${createLocation.icon})`
                classAssigner().icon.style.backgroundImage = `url(${createLocation.icon})`
                classAssigner().location.textContent = createLocation.location
                classAssigner().degree.textContent = String(createLocation['degree-c']).slice(0, -2)

                idAssigner()['day-forecast-icon-2'].style.backgroundImage = `url(${createLocation.icon2})`
                idAssigner()['day-forecast-icon-3'].style.backgroundImage = `url(${createLocation.icon3})`
                idAssigner()['day-forecast-icon-4'].style.backgroundImage = `url(${createLocation.icon4})`
                
                idAssigner()['low-1'].textContent = createLocation.mintemp1
                idAssigner()['low-2'].textContent = createLocation.mintemp2
                idAssigner()['low-3'].textContent = createLocation.mintemp3
                idAssigner()['low-4'].textContent = createLocation.mintemp4

                idAssigner()['high-1'].textContent = createLocation.maxtemp1
                idAssigner()['high-2'].textContent = createLocation.maxtemp2
                idAssigner()['high-3'].textContent = createLocation.maxtemp3
                idAssigner()['high-4'].textContent = createLocation.maxtemp4

                idAssigner()['time-3'].textContent = (createLocation.date3).slice(5)
                idAssigner()['time-4'].textContent = (createLocation.date4).slice(5)
            },

            (error) => {
                console.error(error)
            }
        )
        


    })
}

handler()



export default handler






