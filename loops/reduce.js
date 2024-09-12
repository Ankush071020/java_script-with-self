// const newArr=[0,1,2,3,4]


// const hello=newArr.reduce(function(acc,curn){
//     console.log(`accumulator value:${acc} and currentValue:${curn}`);
//     return acc+curn},0)
// console.log(hello);
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const hello=shoppingCart.reduce(function (acc,curn){ 
    console.log(`accumulator value:${acc} and currentValue:${curn.price}`)
    return acc+curn.price},0)
console.log(hello);

    
