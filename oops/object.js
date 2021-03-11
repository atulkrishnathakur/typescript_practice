var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.display = function () {
        console.log("Employee Code: " + this.empCode);
        console.log("Employee Name: " + this.empName);
    };
    return Employee;
}());
var emp_obj = new Employee();
emp_obj.empCode = 101;
emp_obj.empName = "Atul Krishna Thakur";
console.log("Employee Code:" + emp_obj.empCode);
console.log("Employee Name:" + emp_obj.empName);
emp_obj.display();
