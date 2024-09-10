const coding=["js","ruby","java","python"]
const values=coding.forEach((item)=>{
    console.log(item);
    // return item; forEach doesn't return value
})
console.log(values);


const myNums=[1,2,3,4,5,6];
const valuess=myNums.filter((num)=>num>4)
const valuesss=myNums.filter((num)=>{
    return num>4})
console.log(valuess)//filter returns us the value
console.log(valuesss)