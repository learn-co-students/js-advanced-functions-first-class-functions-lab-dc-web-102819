const returnFirstTwoDrivers = function (driversArray) {
  const [first, second] = driversArray
  return [first, second]
}

const returnLastTwoDrivers = function (driversArray) {
    return [driversArray[driversArray.length - 2], driversArray[driversArray.length - 1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (integer) {
  return function(fare) {
    return fare *= integer
  }
}

const fareDoubler = function (fare) {
  return fare *= 2
}

const fareTripler = function (fare) {
  return fare *= 3
}

function selectDifferentDrivers(drivers, fun) {
  if (returnLastTwoDrivers === fun) {
    return returnLastTwoDrivers(drivers)
  } else if (returnFirstTwoDrivers === fun) {
    return returnFirstTwoDrivers(drivers)
  }
}
