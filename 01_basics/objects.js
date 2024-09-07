//singleton: when made from constructor than it is used
//object literals

//Object.create
// let mysym=Symbol("key1")


// const user={
//     name:"asha",
//     Id:2,
//     [mysym]:"mk1",
//     "full name":"asha sharma", 
//     email:"asha@gmail.com",
//     lastlogindays:["monday","tuesday","saturday"]

// }
// console.log(user.name)
// console.log(user.lastlogindays[0])
// console.log(user["email"])
// console.log(typeof user[mysym])

// Object.freeze(user)//after this no one can chnge the value of id
// user.Id=1
// console.log(user.Id)



// user.greeting=function(){
//     console.log(`congratulations ${user.name}`)//or this.name
// }

// console.log(user.greeting())

//**************************Singleton Objects****************** */


// const user=new Object();
// console.log(user)

const userone={
   Id:1
    ,fullname:{
        firstname:"asha",
        lastname:"sharma"
    },age:18
}
// console.log(userone.fullname?.firstname)



const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}

const obj3={obj1,obj2}
//console.log(obj3)
//const obj5=Object.assign(obj1,obj2) in this both object will combine and the output will dlflect in obj1 so bad practise
// const obj4=Object.assign({},obj1,obj2)//we applied curly nbracket so that output will deflect and add in new object and not in obj1]
// const obj6={...obj1,...obj2}
// console.log(obj4)
// console.log(obj6["1"])


// console.log(Object.keys(userone));
// console.log(Object.values(userone));
// console.log(Object.entries(userone));

// console.log(userone.hasOwnProperty("firstname"))

const course={
    name:"asha sharma",
    course:"chai aur code",
    courseinside:"javascript"
}

//*****************destructuring in javascript********************

//if we want to access an single value  more than a time then why using dot and sq. bracket onbe more method
const {courseinside:c1,name}=course//we can give alias as c1
console.log(c1 ," ",name)

//***************************JSON data format***************** */
// {
//     "name": "asha",
//     "course":"hindi"
// }