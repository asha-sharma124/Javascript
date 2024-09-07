function add(n1,n2)//parameters
{
    console.log(n1+n2)
}
add(4,3);//arguments
//**************************Rest operator means how can we pass multiple values in function */

function calculatePrice(val1,...num){//rest operator
    return num
}

console.log(calculatePrice(100,200,300))



const user={
    username:"asha",
    price:159
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);

}
handleObject(user)//WE CAN DO THE SAME WITH ARRAYS