interface Person {
	
	firstName:string;
	lastName:string;
	age:number;
	fullName();
	getAge();
	
}


class Employee implements Person{
	
	firstName:string;
	lastName:string;
	age:number;
	
	fullName(){
		
		return this.firstName+" "+this.lastName;
		
	}
	
	getAge(){
		
		return this.age;
	}
	
	constructor(firstN:string,lastN:string,ageN:number){
		
		this.firstName = firstN;
		this.lastName = lastN;
		this.age = ageN;
	}
	
	
}

let obj = new Employee("Atul","Thakur",31);

let fullName = obj.fullName();
let age = obj.getAge();

console.log("Name of Person: "+fullName+"\n Age: "+age);
