// 1 + 2 + 3 + 4 + 5 + 6 + 7
function sumOfNumbers(number) {
    let sum = 0;
    for (var i = 1; i <= number; i++) {
        sum = sum + i;
    }
    return sum;
}
let printSumNumbers = sumOfNumbers(4);
console.log(printSumNumbers);