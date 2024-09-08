// const user={
//     username:"asha",
//     fees:999,
//     message:function(){
//         console.log(this.username);
//         console.log(this);
//     }
// }
// user.message()
// console.log(this)//its an window object that provides all the properties
// function chai(){
//     let username="ashaa"
//     console.log(this.username)
// }
// chai()


// const chaii=()=>{
//     let username="hies"//this will not work for fnctns and applicable only for objects
//     console.log(this.username)
// }
// chaii()

// const add=(num1 ,num2)=>{
//     return num1+num2
// }
// //if we are using curly brackets then we have to use return statemnet
// console.log(add(3,4))

// const addtwo=(num1,num2)=>  num1+num2;
// console.log(addtwo(5,6))

// const numberr=(num1,num2)=>({username:"asha"})
// console.log(numberr(3,4))


// const myArray=[2,5,3,7,8]
// // myArray.forEach(function)

// //Immediately Invoked function expression(IIFE)

(function chai(){//named iife
    console.log("DB connected")
})();

(function chaiorcode(){
    console.log("hello world")
})();

((name)=>{
    console.log(`hello ${name}`);
})('asha');
