function isLeapYear(year){
    let reminder = year % 4;
    if(reminder === 0){
        return true;
    }
        return false;
}
let years = 2017;
let leapYear = isLeapYear(years);
console.log(leapYear);