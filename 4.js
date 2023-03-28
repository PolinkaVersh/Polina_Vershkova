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
