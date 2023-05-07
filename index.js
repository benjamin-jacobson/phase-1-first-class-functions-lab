// Code your solution in this file!

const returnFirstTwoDrivers = function(arg1=['Antonia', 'Nuru', 'Amari', 'Mo']){
    return arg1.slice(0,2)
}

const returnLastTwoDrivers = function(arg1=['Antonia', 'Nuru', 'Amari', 'Mo']){
    return arg1.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(arg2){
    return function(fare) {
        return arg2 * fare
    }
}

function fareDoubler(x) {
    const rando = createFareMultiplier
    return rando(2)(x)
}

function fareTripler(x) {
    const rando = createFareMultiplier
    return rando(3)(x)
}

function selectDifferentDrivers(a1=['Antonia', 'Nuru', 'Amari', 'Mo'], a2) {
    return a2(a1)
    }