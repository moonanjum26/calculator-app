 /*function to concatenate the mathematical expression*/
function Numbers(dig)                             
 {
 	document.getElementById("result").value += dig;  /*concatenates the expression*/

 }

/*function to clear the result and display textbox*/

 function Clear(){                                 
 	document.getElementById("display").value = "";   /*clears the display textbox*/
 	document.getElementById("result").value = "";    /*clears the result textbox*/
 }

 /*function to calculate the complete mathematical expression*/

 function Evaluate(){                              
 	document.getElementById("display").value = eval(document.getElementById("result").value) /*evaluates the complete expression*/
 }

/*function to calculate the power of two of any number*/

 function Power()									
 {  
 	
 		var x = document.getElementById("result").value;  /*takes the result textbox value into a variable*/
 		c = Math.pow(x,2);                                /*calculates the power*/
 		document.getElementById("display").value = c;     /*takes the result into the display textbox*/
 
 	
}

