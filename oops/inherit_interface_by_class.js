var Employee = /** @class */ (function () {
    function Employee(firstN, lastN, ageN) {
        this.firstName = firstN;
        this.lastName = lastN;
        this.age = ageN;
    }
    Employee.prototype.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Employee.prototype.getAge = function () {
        return this.age;
    };
    return Employee;
}());
var obj = new Employee("Atul", "Thakur", 31);
var fullName = obj.fullName();
var age = obj.getAge();
console.log("Name of Person: " + fullName + "\n Age: " + age);
