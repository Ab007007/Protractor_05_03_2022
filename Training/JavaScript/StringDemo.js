let fn = "aravinda"
let ln = "     HB    "
let birthYear = 1982

let details = `Hi My Name is ${fn} ${ln}, and i'm ${2022 - birthYear} years old`
console.log(details);
console.log(details.toUpperCase());
console.log(details.toLowerCase());
console.log(details.length);


console.log(`Char at index 2, ${fn.charAt(2)}`);
console.log(`length of the string before trim ${ln.length}`);
console.log(`length of the string after trim ${ln.trim().length}`);
console.log(`Index of char A  ${fn.indexOf('a')}`);
console.log(`Last Index of char A  ${fn.lastIndexOf('a')}`);
console.log(`Length of Name ${fn.length}`);

let userDetails = "Name=Aravinda;locatin=Bangalore;Qualificaion=BE";

let arraydetails = userDetails.split(';')
console.log(arraydetails);

console.log(arraydetails[0].split("=")[1]);
//console.log(fn.substring(0,4));
console.log(arraydetails[0].substring(arraydetails[0].indexOf('=')+1,arraydetails[0].length));
console.log(arraydetails[1].substring(arraydetails[1].indexOf('=')+1,arraydetails[1].length));
console.log(arraydetails[2].substring(arraydetails[2].indexOf('=')+1,arraydetails[2].length));


