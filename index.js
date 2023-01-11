// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

function returnFirstTwoDrivers(arrayDrivers) {
    return arrayDrivers.slice(0, 2);
}
function returnLastTwoDrivers(arrayDrivers) {
    return arrayDrivers.slice((arrayDrivers.length - 2));
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (x) {
    return function (fare) {
        return fare * x;
    } ;
}

function fareDoubler (fare) {
    return createFareMultiplier(fare)(2);
}

function fareTripler (fare) {
    return createFareMultiplier(fare)(3);
}

function selectDifferentDrivers(arrayOfDrivers, f) {
    let newList = f(arrayOfDrivers);
    return newList
    }

// const fareMultiplier = createFareMultiplier(2); 

// console.log(selectingDrivers[0](drivers));
// console.log(selectingDrivers[1](drivers));
// }

// fareDoubler()
// fareTripler()
// selectDifferentDrivers(arrayOfDrivers, function)