//*****************************hoisting***** */
console.log(addone(5))
function addone(num){
    return num+1;
}

//console.log(fnct(8))//will give error because its an variable
const fnct=function(num){
    return num+2
}
