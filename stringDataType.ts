let myStr1: string ="";
let myStr2:string = '';

let empName: string = "Atul";   
let empDept: string = "CS";  

// Before-ES6  
let output1: string = empName + " works in the " + empDept + " department.";   
  
// After-ES6  
let output2: string = `${empName} works in the ${empDept} department.`;   

console.log(myStr1);
console.log(myStr2);

console.log(output1);
console.log(output2);