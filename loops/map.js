let newArr=[0,1,2,3,4,5,6,7,8,9,10,11,12]
// const hello=newArr.map((num)=>num+10)
const hello=newArr
            .map((num)=>num+10)
            .map((num)=>num*2)
            .filter((num)=>num<=30)
console.log(hello);
