// ? function
function isMoonUp(time){
    if(time > 7){
        return true;
    }
    else{
        return false;
    }
}
var moon = isMoonUp(1);
console.log(moon);