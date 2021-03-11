class Car{
	
     color:string;
     
     constructor(carcolor:string){
		 
		 this.color = carcolor;
	 }	 
	
}

class Audi extends Car{
	
	price: number;
	
	constructor(color:string, price:number){
	
       super(color);
      this.price = price;     
	 
	}
	
	
  display():void{
	  
	console.log("Color of Audi Car: "+this.color);
    console.log("Price of Audi Car: "+this.price);	
	  
  }	
	
}


var obj = new Audi("Black",100000000);

obj.display();
