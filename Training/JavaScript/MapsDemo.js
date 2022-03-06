let resto = new Map();

resto.set('name', 'Nandini')
resto.set('location', ['Bangalore','Hydrabad','Pune','Chennai'])
resto
.set('categories',['Indian','Chinees'])
.set('open', 11)
.set('close',23)
.set(true, 'We are open')
.set(false, 'Sorry, We are closed now')
.set(1,"dajhfja alkdhj laksjh ksajdfh lsa")


console.log(resto.get('location'));
console.log(resto.has('name'));
console.log(resto.delete(1));

console.log(...resto);
console.log(resto);
time = 12
console.log(resto.get((time >= resto.get('open') && time <= resto.get('close'))));