class Employee{

   empCode: number;
   empName: string;

   display():void{
	   
	    console.log("Employee Code: "+this.empCode);
		console.log("Employee Name: "+this.empName);
   }
   
}


var emp_obj = new Employee();

emp_obj.empCode = 101;

emp_obj.empName = "Atul Krishna Thakur";

console.log("Employee Code:"+emp_obj.empCode);
console.log("Employee Name:"+emp_obj.empName);

emp_obj.display();
