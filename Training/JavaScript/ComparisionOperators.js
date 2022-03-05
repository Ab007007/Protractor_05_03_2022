let x = 2
let x1 = 2
let y = 4
let p = 20
let z = '2'

console.log(`Check Equal Values: ${x} and ${x1} ${x==x1}`);
console.log(`Check Equal Values alone with Data type: ${x} and ${x1} ${x===x1}`);

console.log(`Check Equal Values : ${x} and ${z} ${x==z}`);
console.log(`Check Equal Values alone with Data type: ${x} and ${z}  ${x===z}`);

console.log(`Check NOT Equal Values: ${x} and ${x1} ${x!=x1}`);
console.log(`Check NOT Equal Values alone with Data type: ${x} and ${x1} ${x!==x1}`);

console.log(`Check greater ${x} and ${p} ${x>p}`);

console.log(`Check lesser ${x} and ${p} ${x<p}`);

console.log(`Ternary x= ${x} and y = ${p} : ${(x<p)? x + ' is smaller ' : x + ' is larger '}`);