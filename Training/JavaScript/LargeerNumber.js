let n1 = 1
let n2 = 3
let n3 = 3
if(n1 > n2 && n1 > n3)
{
    console.log(`$n1 is the largest number`);
}
else if(n2 > n1 && n2 > n3)
{
    console.log(`${n2} is largest`);
}
else if (n3 > n1 && n3 > n2)
{
    console.log(`${n3} is largest`)
}
else {
    console.log(`One or more numbers are same`);
}
