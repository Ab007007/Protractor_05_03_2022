// class expression

let person1 = class {

}



//class declaration
class person2 {

    constructor(fn,ln,yob) {
        this.fn = fn 
        this.ln = ln 
        this.yob = yob
    }

    //methods
    calAge() {
        console.log(2022 - this.yob);
    }
}


let p1 = new person2('Aravinda','HB',1984)
console.log(p1.fn);
p1.calAge()