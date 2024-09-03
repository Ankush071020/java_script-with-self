// Array
const newArray=[0,1,2,3,4,5]
const heroArray=["tony","Rogers","Black Window",true,7]
const myArry=new Array(0,1,2,3,4,5)
// console.log(myArry);
// console.log(heroArray);
// myArry.push(9);
// myArry.pop(4);
// myArry.unshift(4);
// myArry.shift();

// console.log(myArry.includes(4));
// console.log(myArry.indexOf(44));
const nyaArray=myArry.join()
// console.log(nyaArray);
// console.log(typeof nyaArray);
 
// slice vs splice


// ********Array(Part2)
const marvel_heroes=["IronMan","Thor","spiderMan"]
const cartoon_heroes=["MightyRaju","Ben10","Veer"]
// marvel_heroes.push(cartoon_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);


// const allheroes=marvel_heroes.concat(cartoon_heroes)

// console.log(allheroes);

const allnewheroes=[...marvel_heroes,...cartoon_heroes]
// console.log(allnewheroes);

const another_array=[1,2,[3,4,5],6,[7,8,[9,10]]]
const realanother_array=another_array.flat(2)//depth
// console.log(realanother_array);


// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
console.log(Array.from({name:"Ankush"}))  //Interesting because you don't tell the editor about ki kiski array bnana h key or name
const score01=100
const score02=200
const score03=300
// console.log(Array.of(score01,score02,score03));



