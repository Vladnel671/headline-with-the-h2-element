let distanceToPump = 50
let mpg = 25
let fuelLeft = 2

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return fuelLeft * mpg >= distanceToPump ? true : false
};

console.log(zeroFuel(distanceToPump,mpg,fuelLeft))