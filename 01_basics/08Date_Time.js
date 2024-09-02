let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);
// let create_Date=new Date(2025,0,1,9,0)
let create_Date=new Date("2025-04-21")
// In case dd/mm/yy month  will be start by one but in case of direct it came in array and start by 0
console.log(create_Date.toLocaleString());
let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// This value comes in millisec from date 1 jan 1970
// console.log(create_Date.getTime());
// Now this also comes in milisec so comaprison become easy.now its value in sec divide by 1000
// console.log(Math.floor(create_Date.getTime()/1000))
console.log(myDate.toLocaleString(`Default`,{
    weekday:"long"
}))



