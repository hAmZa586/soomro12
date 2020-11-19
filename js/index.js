
// This function is used to The addition assignment operator ( += ) 
// adds the value of the right operand to a variable and assigns the result to the variable.
function insert(num)
{
	document.getElementById("data").value+=num;
}

// This function is used to perfom all addition subtraction division and multiplication
function equal()
{
	var x=document.getElementById("data").value;
	if(x=="")
	{
		alert("no value match");
	}
	else{
		
		document.getElementById("data").value=eval(x);
	}

}

// this function to clear field
function clean()
{
	document.getElementById("data").value="";
}

// Back Function To remove one by one character
function back()
{
	var x =document.getElementById("data").value;
	document.form.textview.value=x.substring(0,x.length-1);
}
// Validation For only number Allowed
function filterDigits(eventInstance) { 
    eventInstance = eventInstance || window.event;
        key = eventInstance.keyCode || eventInstance.which;
    if ((47 < key) && (key < 58) || key == 45 || key == 8) {
       return true;
    } else {
            if (eventInstance.preventDefault) eventInstance.preventDefault();
            eventInstance.returnValue = false;
            return false;
    } //if
 } //filterDigits