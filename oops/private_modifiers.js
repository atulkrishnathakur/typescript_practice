var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.msg1 = function () {
        console.log("This is message first");
    };
    Employee.prototype.msg2 = function () {
        console.log("This is message second");
    };
    return Employee;
}());
var obj = new Employee();
obj.name = "Atul Krishna Thakur";
obj.code = 100;
obj.msg1();
obj.msg2();
