class Employee{
	
	 id: number;
	 name: string;
	 
	 constructor(empid:number,empname:string){
		 
		 this.id = empid;
		 this.name = empname;
		 
	 }
	 
	 
	 display():void{
		 
	   console.log("Employee ID: "+this.id);
       console.log("Employee Name: "+this.name);	   
		 
	 }
	
	
	
}


var obj = new Employee(102,"Atul Krishna Thakur");

obj.display();