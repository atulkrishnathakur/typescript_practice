class Employee{

    public name:string;
	public code:number;

    
   public msg1():void{
	   
	   console.log("This is message first");
   }

   msg2():void{
	   
	   console.log("This is message second");
   }   
	
	
}



var obj = new Employee();

obj.name = "Atul Krishna Thakur";
obj.code = 100;

obj.msg1();
obj.msg2();


