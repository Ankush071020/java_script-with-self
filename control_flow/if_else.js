// if(3==="3"){
//     console.log("shi h")
    
// }
// else{
//     console.log("shi nhi h")
    
// }

// const a=20
// if(a==20&&true){
//     console.log("shi h");
    
// }
// const b=20
// if(b==30||true){
//     console.log("shi h");
    
// }

// Truthy and Falsy
const user={}
// if (user) {
//     console.log("shi h");
    
// }
// else{
//     console.log("don't have user email");
    
// }

// Falsy value: False, null,undefined,0,-0,Nan,BigInt 0n

// Truthy value: "0","false",[],{},function(){}
// if (user.length==0) {
//     console.log("Array is empty");
    
// }
// if (Object.keys(user).length==0) {
//     console.log("Object  is empty");
    
// }


// Notes:               Result
//         false==0      true
        //   false==""     true
        //  0==""         true

// Nullish Coaleshing operator(??):null undefined
//  let val1;
//  val1=5??10
//  val1=null??10
//  val1=undefined??10??20
//  console.log(val1);
 
// Ternairy Operator
// condition ?true:false

const iceTeaPrice=100
iceTeaPrice<=80?console.log("less than 80"):console.log("greater than 80");

