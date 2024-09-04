// function sumer(number1,number2) {
//     console.log(number1+number2)
// }
// sumer(3,5)

// result=sumer(3,5)
// console.log(result);
// this is because the function is not reurning a value
function sumer(number1,number2) /*number1 and number2 are parameters*/{
    return(number1+number2)
    // console.log(ok); *** this is unreacheble code becaue function already return a value
}   



result=sumer(3,5)//3 and 5 are arguments here
console.log(result);

function isloogedin(username/*=sam*/) {
    // if(username===undefined){
    //     return`please enter a username`
    // }
    if(!username){
        return`please enter a username`
    }
    return`${username} welcome to the new world`
}
// console.log(isloogedin("Ankush"))
console.log(isloogedin())

    
