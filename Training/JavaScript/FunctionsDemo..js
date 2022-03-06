function add(a=1,b=2)
{
    console.log(arguments);
    return a + b
}

console.log(add());
console.log(add(100));
console.log(add(4,5));
console.log(add(4,5,12));

console.log("<<<<<<<<<<<<<<<<<<<< ANONYMOUS FUNCTION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
let add1 = function(a=1,b=2)
{
    console.log(arguments);
    return a + b
}

console.log(add1());
console.log(add1(100));
console.log(add1(4,5));
console.log(add1(4,5,12));

console.log("<<<<<<<<<<<<<<<<<<<< ARROW FUNCTION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
let add3 = (a=1,b=2) => {
   // console.log(arguments);
    return a + b
}

console.log(add3());
console.log(add3(100));
console.log(add3(4,5));
console.log(add3(4,5,12));