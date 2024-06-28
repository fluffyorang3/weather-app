const classAssigner = () => {
    const elements = ['location', 'degree', 'sign', 'condition', 'day-forecast-icon']
    const classObjects = {}

    elements.forEach((element) => {
        classObjects[element] = document.querySelector(`.${element}`)
    })

    console.log(classObjects);
    return classObjects;
}

const idAssigner = () => {
    const idObjects = {};
    
    for(let i = 1; i < 5; i++) {
        idObjects[`time-${i}`] =document.querySelector(`#day${i} .time`)
        idObjects[`day${i}`] = document.querySelector(`#day${i}`)
        idObjects[`day-forecast-icon-${i}`] = document.querySelector(`#day${i} .day-forecast-icon`)
        idObjects[`low-and-high-${i}`] = document.querySelector(`#day${i} .low-and-high`)
        idObjects[`low-${i}`] = document.querySelector(`#day${i} .low-and-high .low`)
        idObjects[`high-${i}`] = document.querySelector(`#day${i} .low-and-high .high`)
    }

    console.log(idObjects)
    return idObjects;
}

export {classAssigner, idAssigner};