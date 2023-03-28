//1_________________________________________________________________________
var a = Number(prompt("Enter the 1st number", 1));
var b = Number(prompt("Enter the 2nd number", 2));
var c = Number(prompt("Enter the 3rd number", 3));
if (a <= b && a <= c) {
	console.log("Smallest number = " + a);
}
else if (b <= a && b <= c) {
	console.log("Smallest number = " + b);
}
else if (c <= a && c <= b) {
	console.log("Smallest number = " + c);
}
//==========================================================================



//2_________________________________________________________________________________

var month = prompt("Enter the month number, e.g. (1 — январь, 2 — февраль, ...)", 1);
var days;

switch(month) {
  case '1':  
  	days = 31; //Jan
    console.log("Amount of days = " + days);
    break;

  case '2': 
  	days = 28; //Feb
    console.log("Amount of days = " + days);
    break;

  case '3':  
  	days = 31; //Mar
    console.log("Amount of days = " + days);
    break;

  case '4':  
  	days = 30; //Apr
    console.log("Amount of days = " + days);
    break;

  case '5':  
  	days = 31; // May
    console.log("Amount of days = " + days);
    break;

  case '6':  
  	days = 30; //June
    console.log("Amount of days = " + days);
    break;

  case '7':  
  	days = 31; //July
    console.log("Amount of days = " + days);
    break;

  case '8':  
  	days = 31; // Aug
    console.log("Amount of days = " + days);
    break;

  case '9':  
  	days = 30; //Sep
    console.log("Amount of days = " + days);
    break;

    case '10':  
  	days = 31; //Oct
    console.log("Amount of days = " + days);
    break;

    case '11':  
  	days = 30; //Nov
    console.log("Amount of days = " + days);
    break;

    case '12':  
  	days = 31; //Dec
    console.log("Amount of days = " + days);
    break;

  default:
    console.log("Wrong input");
    break;
}
//==========================================================================



//3_________________________________________________________________________
var num = Number(prompt("Enter num", 2));
var exp = Number(prompt("Enter exp", 10));
var array = [];
for (var i = 1; i <= exp; i++) {
	array[i - 1] = num ** i;
}
console.log(array);
//==========================================================================



//4a_________________________________________________________________________
function SayHello(){
	document.write("<h2>Hello, world!</h2>");
}
SayHello();


//4b_________________________________________________________________________
function GetRandom(){
	var randomNumber = Math.random() * 100;
	console.log(randomNumber);
	return randomNumber;
}
console.log(Math.pow(GetRandom(), 2));


//4c_________________________________________________________________________
function Echo(str) {
	document.write("<h2>" + str + "</h2>");
}
var str1 = prompt("Enter any string (for adding on web page)", "default string");
Echo(str1);


//4d_________________________________________________________________________
function InvertString(str) {
	var arr_str = Array.from(str);
	var new_str = [];
	console.log(arr_str);
	for (var i = arr_str.length; i > 0; i--) {
		new_str[i - 1] = arr_str[arr_str.length - i];
	}
	return new_str;
}
var str2 = prompt("Enter any string (for invertion)", "default string");
console.log(InvertString(str2));
