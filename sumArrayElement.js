
/* let array = [5, 7, 8, 10, 45, 30];
let oddNumber = [];
function getOddNumbers(number){
    for(let i=0; i<number.length; i++){
        let element = number[i];
        if(element % 2 !== 0){
            oddNumber.push(element);
        }
    }
    return oddNumber;
}
let arrayOdd = getOddNumbers(array);
console.log(arrayOdd);

let sum = 0;
function findOddSum(arrayElement){
    for(let i=0; i<arrayElement.length; i++){
        var element = arrayElement[i];
        sum += element;
    }
    return sum;
}
let total = findOddSum(arrayOdd);
console.log(total); */


let array = [15, 20, 17, 28, 20, 21, 39, 40];
let sum = 0;
function sumOfArray(arrayElement){
    for(let i=0; i<arrayElement.length; i++){
        let element = arrayElement[i];
        sum += element;
    }
   return sum;
}

let oddArray = [15, 20, 17, 28, 20, 21, 39, 40, 19 , 99];
let oddNumbers = [];
function oddOfArray(arrayElement){
    for(let i=0; i<arrayElement.length; i++){
        let element = arrayElement[i];
        if(element % 2 !== 0){
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}
let printOddNumbers = oddOfArray(oddArray);
// console.log(printOddNumbers);

let totalArraySum = sumOfArray(printOddNumbers);
console.log('total odd number:', totalArraySum); 