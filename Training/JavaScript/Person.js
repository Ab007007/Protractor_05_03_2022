class Person {
    setPersonDetails(name,mob) {
        this.name = name
        this.mob = mob
    }

    getName() {
        return this.name;
    }

    getMobileNumber(){
        return this.mob
    }
}

let emp1 = new Person();
let emp2 = new Person();
emp1.setPersonDetails("Emp1","65468979")
emp2.setPersonDetails("Emp2","65464665")

console.log(emp1.getName());
console.log(emp2.getName());