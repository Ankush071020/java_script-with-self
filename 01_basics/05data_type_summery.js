/*Note:
Java script is a dyanamiclly typed language.This means that you don’t need to declare the type of a variable when you create it. Instead, the type is determined at runtime based on the value assigned to the variable. For example, you can assign a number to a variable and later assign a string to the same variable without any issues:
*/




// there are two types of data types based on how they allocate in the memory
/* **********Primitive data types**********8
these are by call by value
types:
numbers, strings,bollean,symbol,null, undefined,BigInt 
let score=22
let name="Ankush"
let isloggedin=true
let temp.=null
let time=undefined
let BigInt=12345678923545n
const id=Symbol(123);
const anotId=Symbol(123)
console.log(id==anotId);
Symbol always have unique value
*/

// *********Reference/non primitive datatype********
/*These are by call by reference
types:
Array,objects,Functins
const heroes=["Tony","Steve","loki"];
{
 Name:Ankush,
 Age:21,

}
 I can store my function in a variable
 const myFunction = function(){
 console.log("bayyy")
 }
*/
// https://262.ecma-international.org/5.1/#sec-11.4.3