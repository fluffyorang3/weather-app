const classAssigner = () => {
    const elements = ['location', 'degree', 'sign', 'condition', 'day-forecast-icon']
    const classObjects = {}

    elements.forEach((element) => {
        classObjects[element] = document.querySelector(`.${element}`)
    })

    console.log(classObjects);
}

export default classAssigner;