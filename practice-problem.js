// * problem 1
/* function hourToMins(hour){
    let minute = hour * 60;
    return minute;
}
let mins = hourToMins(5.9);
console.log(mins); */

// * problem 2

/* function findLeapYear(years){
    let result = [];
    for(let i=0; i<years.length; i++){
        let element = years[i];
        if(element % 4 === 0){
            result.push(element);
        }
    }
    return result;
}
const years = [2023,2024,2025,2028,2030];
const leapYear = findLeapYear(years);
console.log(leapYear) */

// * problem 3
/* function findOddSum(numbers){
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        let element = numbers[i];
        if(element % 2 !== 0){
            sum += element
        }
    }
    return sum;
}
const arrayNumbers = [5, 7, 8, 10, 45, 30]
const sumOfOddNumber = findOddSum(arrayNumbers);
console.log(sumOfOddNumber); */

// * practice challenge 1
/* function leapYear(year){
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}
let isLeapYear = leapYear(2017);
console.log(isLeapYear); */

// * practice challenge 2
/* function ageOddEven(age){
    if(age % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
let myAge = 21;
let printage = ageOddEven(myAge);
console.log(printage); */

// * practice challenge 3
/* function hourToMin(hour){
    let minutes = hour * 60;
    return minutes;
}
let printMinute = hourToMin(4);
console.log(printMinute);

*/

// * practice challenge 4
function hourToSecond(hour){
    let minutes = hour * 60;
    let seconds = minutes * 60;
    return seconds;
}
let printSeconds = hourToSecond(4);
console.log(printSeconds);



