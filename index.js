import {classAssigner, idAssigner} from "./contentAssigner.js";
import weatherFetcher from "./weatherFetcher.js";
import handler from "./domUpdater.js";

const classes = classAssigner();
const ids = idAssigner();



function getWeatherJSON(location) {
    const weatherJSON = weatherFetcher(location)
    return weatherJSON
}







