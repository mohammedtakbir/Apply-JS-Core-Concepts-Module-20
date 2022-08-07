// ? factorial in reverse way using for loop
function factorial(number){
    let multiply = 1;
    for(let i=number; i>=1; i--){
        multiply = multiply * i;
    }
    return multiply;
}
let fact = factorial(6);
console.log(fact);

// ? factorial in reverse way using while loop
function factorial(number){
    let i = number;
    let multiply = 1;
    while(i>=1){
        multiply *= i;
        i--;
        console.log(multiply);
    }
    return multiply;
}
let number = 7;
let totalFactorial = factorial(number);
console.log(totalFactorial);