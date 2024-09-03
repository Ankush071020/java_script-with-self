// singleton
// Object.create
// object literals
const mysym=Symbol("key1")
// console.log(typeof mysym);

const Jsuser={
    Name:"Ankush",
    age:21,
    // mysym:"Mykey1",
    [mysym]:"Mykey1",
    "location name":"jaipur",
    email:"ankush@ms.com",
    isloggedin:true,
    logindays:["sat","mon","tue"]
}
// console.log(Jsuser.email)
// console.log(Jsuser["location name"] );
// console.log(Jsuser[mysym] );
// console.log(typeof Jsuser[mysym] );
// type of this string because the value inside the symbol is a string
Jsuser.age=23
// Object.freeze(Jsuser)     After that we can't change the object
Jsuser.age=30
// console.log(Jsuser);

Jsuser.greatingOne=function(){
    console.log("hello Jsuser");
    
}
console.log(Jsuser.greatingOne);
console.log(Jsuser.greatingOne());
Jsuser.greatingTwo=function(){
    console.log(`hello Jsuser,${this.Name}`);
    
}
console.log(Jsuser.greatingTwo);
console.log(Jsuser.greatingTwo());



