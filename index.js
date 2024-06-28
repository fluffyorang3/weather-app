import {classAssigner, idAssigner} from "./contentAssigner.js";
import weatherFetcher from "./weatherFetcher.js";

const classes = classAssigner();
const ids = idAssigner();

weatherFetcher('brussels')

weatherFetcher('tijuana')
