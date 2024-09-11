// const Myarry = new Array("a","n","k","u","s","h");
// Myarry.forEach(function (key) {
//     console.log(key);
    
    
// });


// we can also use arrow function
// const newArry=[0,1,2,3,4,5,6,7]
// sum=0
// newArry.forEach( (key)=> {
//     sum=sum+key
//     console.log(sum);
// });

// we can also use an externalfunction in for each loop

// let don=(item)=> {
//     console.log(item);
    
// }
// const newArry=[0,1,2,3,4,5,6,7]
// newArry.forEach(don);

// we can also access the index and the whole array
// let Myarry=["hockey","cricket","soccers","polo"]
// Myarry.forEach((item,index,arr) => {
//     console.log(item,index,arr);
    
// });

let newArry=[
    {
        language_name:"java script",
        language_file:"js"
    },
    {
        language_name:"cpp",
        language_file:"c++"
    },
    {
        language_name:"python",
        language_file:"py"
    },
    {
        language_name:"java",
        language_file:"j"
    }
]
newArry.forEach(item => {
    console.log(item.language_file);
    
});