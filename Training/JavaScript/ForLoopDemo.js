let num = 15

for (let index = 1; index <= 10; index++) 
{
    console.log(`${num} * ${index} = ${num * index}`);  
}


let fruits = ['apple', 'mango','grapes','banana']

for(let i in fruits)
{
    console.log(`element at index ${i} is ${fruits[i]}`);
}

for(let fruit of fruits) {
    console.log(`Array has ${fruit}`);
}

//TODO - foreach

fruits.forEach(function(ele){
    console.log(`using for each ${ele}`);
})

fruits.forEach(element => {
    console.log(`for each using arrow function ${element}`);
})

