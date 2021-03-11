var Employee = /** @class */ (function () {
    function Employee(empid, empname) {
        this.id = empid;
        this.name = empname;
    }
    Employee.prototype.display = function () {
        console.log("Employee ID: " + this.id);
        console.log("Employee Name: " + this.name);
    };
    return Employee;
}());
var obj = new Employee(102, "Atul Krishna Thakur");
obj.display();
