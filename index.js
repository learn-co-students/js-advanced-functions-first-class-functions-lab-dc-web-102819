// Code your solution in this file!

function returnFirstTwoDrivers(array) {
	const x = function(drivers){ return drivers.slice(0,2)}

	return x(array)

}

function returnLastTwoDrivers(array) {
	const x = function(drivers){ return drivers.slice(drivers.length -2,drivers.length)}

	return x(array)

}
	

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {

	const x = function(fare) {return fare * int}
	return x
}

function fareDoubler(fare) {
	const x = createFareMultiplier(2)(fare)

	return x
}

function fareTripler(fare) {
	const x = createFareMultiplier(3)(fare)

	return x
}

function selectDifferentDrivers(drivers, func) {
	return func(drivers)
}