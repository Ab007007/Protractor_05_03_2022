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

class Employee extends Person 
{
    setEmployeeDetails(employeename, employeemobile,employeeid, employeeemail) {
        this.setPersonDetails(employeename, employeemobile)
        //this.name = employeename
        //this.mob = employeemobile
        this.employeeid = employeeid
        this.employeeemail = employeeemail
    }

    getName() {
        return `Employee Name : ${this.name}`
    }
}

let e1 = new Employee();
e1.setEmployeeDetails("Aravina" , 654654646464, "emp123", "emp123@org.com")

console.log(`Employee details are ${e1.name}`);
console.log(e1.getName());


module.exports = Employee


