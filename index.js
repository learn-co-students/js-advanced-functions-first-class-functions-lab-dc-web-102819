
function returnFirstTwoDrivers(arrayOfDrivers){
    
        let newArray = []
        newArray.push(arrayOfDrivers[0], arrayOfDrivers[1])
        return newArray
    
}

function returnLastTwoDrivers(arrayOfDrivers){

    let newArray = []
    newArray.push(arrayOfDrivers[arrayOfDrivers.length -2], arrayOfDrivers[arrayOfDrivers.length -1])
    return newArray

}

 let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

 function createFareMultiplier(number){
 
    if (number !== 4){
       
       function fareMultiplier(fare){
        return fare * 5
       }
       return fareMultiplier
    }
 }

 function fareDoubler(fare){
    return fare * 2
 }

 function fareTripler(fare){
    return fare * 3
 }

 function selectDifferentDrivers(arrayOfDrivers, funct){
   return funct(arrayOfDrivers)
 }
 