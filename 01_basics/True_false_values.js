//the values consider true and false in control flow(if -else) are


//Falsy Values
//false, 0 , -0 , BigInt 0n , "" ,null ,undefined ,NaN
//all will not execute if loop if passed

//Truthy values
//"0" ,"false", " ", [] , {} , function(){} , 


const emptyObj={};
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
}

//Nullish Coalescing Operator (??): null undefiend
let val1;
//val1=5??10            =5
//val1=null?? 10        =10
//val1=undefined?? 10   =10
val1=null ?? 10 ?? 20
console.log(val1)




//Ternary operator
//condition ? true:false
const val=10
val>=5 ? console.log("value greater than 5"): console.log("value less than 5");


//&& and  || operator  ...........switch case all are studied

