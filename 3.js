var num = Number(prompt("Enter num", 2));
var exp = Number(prompt("Enter exp", 10));
var array = [];
for (var i = 1; i <= exp; i++) {
	array[i - 1] = num ** i;
}
console.log(array);