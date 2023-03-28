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