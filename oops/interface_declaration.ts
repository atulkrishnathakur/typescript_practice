interface OS{
	
  name:string;
  language:string;
  
}


let OperatingSystem = (type:OS):void =>{
	

  console.log("Android "+type.name+" has "+type.language+" language.");	
	
}


let Oreo = {name:'0',language:'java'}

OperatingSystem(Oreo);