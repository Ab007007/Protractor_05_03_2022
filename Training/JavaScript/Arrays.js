let numbers = [1,2,3,4,5,6]
console.log(numbers);


let fruits = ['Apple','Banana','Mango']

console.log(`Array with ${fruits.length}, and elements are ${fruits}`)
fruits.push('Cherry')
console.log(`Array with ${fruits.length} after push, and elements are ${fruits}`)
fruits.pop()
console.log(`Array with ${fruits.length} after pop, and elements are ${fruits}`)
fruits.unshift('Lemon')
console.log(`Array with ${fruits.length} after unshift, and elements are ${fruits}`)
fruits.shift()
console.log(`Array with ${fruits.length} after shift, and elements are ${fruits}`)

delete fruits[1]
console.log(`Array with ${fruits.length} after delete, and elements are ${fruits}`)
fruits[1] = 'NewBanana'
console.log(`Array with ${fruits.length} after insert, and elements are ${fruits}`)

fruits.splice(0,2)
console.log(`Array with ${fruits.length} after splice, and elements are ${fruits}`)

fruits.splice(2,0,'Orange','Jack')
console.log(`Array with ${fruits.length} after splice, and elements are ${fruits}`)

let citricFruit = fruits.slice(0,2)
console.log(`Array with ${citricFruit.length} after splice, and elements are ${citricFruit}`)

let evennum = [2,4,6,8]
let oddnum = [1,3,5,7]

console.log(evennum.concat(oddnum));
console.log(`Numbers ` + evennum.concat(oddnum).join(','));

