interface Person{

  name:string;
  age:number;  
	
}

interface Employee extends Person{
	
	gender:string;
	empCode:number;
	
}


let empObj = <Employee>{};

empObj.name = "Atul";
empObj.age = 25;
empObj.gender = "Male";
empObj.empCode = 33;


console.log("Name: "+empObj.name);
console.log("Employee Code: "+empObj.empCode);

