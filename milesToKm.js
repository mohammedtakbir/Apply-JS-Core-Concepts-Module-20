function milesToKm(kiloMeter){
    let mile = kiloMeter * 1.60934;
    return mile;
}

let myWalkInMile = 10;
let myWalkInKilometer = milesToKm(myWalkInMile);
console.log(myWalkInKilometer); 