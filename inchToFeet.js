/* let myInches = 52;
let myFoot = myInches / 12;
let fixed = myFoot.toFixed(2);
let parse = parseFloat(fixed);
console.log(parse);

let dadaIncehs = 144;
let dadaFeet = dadaIncehs / 12;
console.log(dadaFeet); */

function inchToFeet(inches){
    let feet = inches / 12;
    return feet;
}

let dadaInches = 144;
let dadiInches = 60;
let myInches = 12;

let dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);