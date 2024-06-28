import {classAssigner, idAssigner} from "./contentAssigner.js";
import weatherFetcher from "./weatherFetcher.js";

const handler = function submitHandler() {
    const form = idAssigner().locationForm

    form.addEventListener("submit", (e) => {
        e.preventDefault()

        let submittedLocation = document.getElementById('location').value

        console.log(submittedLocation)

        const weatherJSON = weatherFetcher(submittedLocation)

        weatherJSON.then(
            (result) => {
                console.log(result)
            },
            (error) => {
                console.error(error)
            }
        )

    })
}

handler()



export default handler






