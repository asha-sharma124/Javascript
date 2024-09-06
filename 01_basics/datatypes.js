//datatypes are classified as primitive and non-primitive on the basis of storing and accessing from memmory
//primitive data types are
// 7 types= string ,number ,boolean , null, undefined ,symbol(used for making unique number or value),BigInt

//non primitive or reference type
//Arrays,Objects,functions  alll return typeof as object

const a="10"
const value1=Symbol('123')
const value2=Symbol('123')
console.log(value1==value2)
console.log(typeof value1)
console.log(typeof a)
console.log(typeof Number(a));



