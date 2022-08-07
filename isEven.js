function isEven(number){
    let reminder = number % 2;
    if(reminder === 0){
        return true;
    }
    else{
        return false;
    }
}
let isMyNumberEven = isEven(18);
let isHerNumberEven = isEven(16);
console.log('My number is', isMyNumberEven,'Her Number is', isHerNumberEven);