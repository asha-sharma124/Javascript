//shallow copy shares same reffrence 
//deep copy doest not share reffrence

//arrays work on shallow copy means change will be directly viisble to the original one



const arr=[1,2,3,4,5];
// arr[0]=0;
// console.log(arr[0]);


// //Array methods
// arr.push(6);  console.log(arr);
// arr.pop();    console.log(arr)
// arr.concat(3,4,5,6,7,8);
// console.log(arr);


// arr.unshift(10)
// console.log(arr)
// arr.shift()
// console.log(arr);


// const newarr= arr.join()
// console.log(arr)
// console.log(newarr)

// console.log(typeof newarr)


//Slice and Splice

// console.log(arr.slice(1,3))
// console.log("1) " ,arr)


// console.log(arr.splice(1,3)) //it manipulates the original array by removing the original data and include the last range value
// console.log("2) " ,arr)




let arr1=["asha", "shima", "leo"]
let arr2=[1,2,3,4]
// let arr4=arr1.push(arr2);
//  console.log(arr4);
// console.log(arr1[3][2]);


// let arr3=arr1.concat(arr2)
// console.log(arr3);
// console.log(arr1)


//***************** Spread operator **********************/

// let newarr=[...arr1,...arr2]
// console.log(newarr)



// const arrr=[1,2,3,[4,5],6,[7,[8,9]]];

// console.log(arrr.flat(Infinity));

console.log(Array.isArray("asha"));
console.log(Array.from("asha"))
console.log(Array.from({name:"asha"}));//interresting case as we have to defined first whether we want it in the form of key value pair

let a=10;
let b=20,c=30;
console.log(Array.of(a,b,c))