let person = function (name,birthYear) {
    this.name = name 
    this.birthYear = birthYear
    this.calAge = function() {
        return 2022 - this.birthYear;
    }

}

let p1 = new person('Harry',1983)
console.log(p1);
console.log(p1.calAge());