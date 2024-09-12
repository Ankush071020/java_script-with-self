// let myNum=[0,1,2,3,4,5,6]
// const hello=myNum.forEach((num) => {
//     console.log(num);
    
    
// });
// console.log(hello)

// for doesnot return any value

// Filter
// let myNum=[0,1,2,3,4,5,6]
// // const hello=myNum.filter((num)=>{
// //     return num>=3})
// const hello=myNum.filter((num)=>num>=3)
// console.log(hello);

// by using foreach we can also return a value

// let myNum=[0,1,2,3,4,5,6]
// let newArr=[]
// const hello=myNum.forEach((num)=>{
//     if (num>=3) {
//         newArr.push(num)
        
//     }
// })
// console.log(newArr);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const hello=books.filter((b)=>b.edition<2008)
  const hello=books.filter((b)=> b.genre==="Science"||b.publish===1999)
 console.log(hello);
 
