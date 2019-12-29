const returnFirstTwoDrivers = function(drivers){
    let newArray = []
    newArray.push(drivers[0])
    newArray.push(drivers[1])
    return newArray
}

const returnLastTwoDrivers = function(drivers){
    let newArray = []
    newArray.push(drivers[drivers.length-2])
    newArray.push(drivers[drivers.length-1])
    return newArray
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(integer){
    return function(value){
        return integer * value
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(arrayOfDrivers, selectingDrivers){
    return selectingDrivers(arrayOfDrivers)
}