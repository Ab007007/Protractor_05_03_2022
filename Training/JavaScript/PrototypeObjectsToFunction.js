let person = function (name,birthYear) {
    this.name = name 
    this.birthYear = birthYear
}
person.prototype.calAge = function() {
    return 2022 - this.birthYear;
}


let greet = function(prefix, suffix) {
    console.log(`${prefix} ${this.name} ${suffix}`);
}
let p1 = new person('Harry',1982)
let p2 = new person('Nandi',1981)
let p3 = new person('Shivu',1980)
console.log(p1);
console.log(p1.calAge());
console.log(p2);
console.log(p2.calAge());
console.log(p3);
console.log(p3.calAge());

greet.call(p1,"hi","how are you")
greet.apply(p1,["hi","how are you "])
