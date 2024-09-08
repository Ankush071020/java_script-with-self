const one={
    username:"AJ",
    rollno_:7,
    Chai(){
        // conscole.log(`${this.username},welcome to the new world`);
        // console.log(this);
        
    }

}
// one.Chai()
// one.username="KC"
// one.Chai()
// console.log(this);//in this case we get an empty {} but ehen we run this on browser console we get window{*******} 
// function hello(){
//     let username="Ank"
//     console.log(this.username);
    
// }
// hello()
    
// const hope=function hello(){
//     let username="Ank"
//     console.log(this.username);
    
// }
// hope()


//   ************Arrow function*****************
// const hope= ()=>{
//     let username="Ank"
//     console.log(this.username);
    
// }
// hope()
    

// const hope= ()=>{
//     let username="Ank"
//     console.log(this);
    
// }
// hope()

// const addnum=(num1,num2)=>{
//      return num1+num2
// }
// console.log(addnum(5,8));

// const addnum=(num1,num2)=> (num1+num2)
const hero=(num1,num2)=> ({username:"Harikesh"})
// if we use() rather than {} this don't use return

// console.log(addnum(5,8));
console.log(hero);


    

