const weatherFetcher = async (location) => {
    
    function getUrl(location) {
        const API_KEY = '843114a67fc84cb88a4172733242406'

        location = location.trim().replace(/ /g, "-")
    
        const URL = `https://api.weatherapi.com/v1/forecast.json?q=${location}&days=4&key=${API_KEY}`
    
        return URL;
    }

    const URL = getUrl(location)

    console.log(URL)

    async function getLocationJSON() {
        const response = await fetch(URL)
        const weatherData = await response.json()
        console.log(weatherData)
    }

    getLocationJSON()

}




export default weatherFetcher