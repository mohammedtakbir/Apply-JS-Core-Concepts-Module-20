// 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9
function factorial(number){
    let multiply = 1;
    for(let i=1; i<=number; i++){
        multiply = multiply * i;
        console.log(multiply);
    }
    return multiply;
}
let finelMultiplication = factorial(7);
console.log(finelMultiplication);