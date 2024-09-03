const myobj=new Object()
//Singleton Object
const tinderuser={}
tinderuser.id="123abc"
tinderuser.email="some@google.com"
tinderuser.isloggedin=false
// console.log(tinderuser);
const username={
    anotherUserName:{
        realuserName:{
            userfullName:{
                Name:"Ankush"
            }
        }
    }
}
// console.log(username.anotherUserName.realuserName.userfullName.Name);
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// obj3={obj1,obj2}
// console.log(obj3);
// obj3=Object.assign({},obj1,obj2)
// console.log(obj3);
// obj3={...obj1,...obj2}
// console.log(obj3)
const user=[
    {
        id:"1123aa",
        email:"any.com"
    },
    {

    },
    {

    }
    

]
// console.log(user[0].email)

//all three come in array datatype
// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))


 console.log(tinderuser.hasOwnProperty("isloggedin"))



