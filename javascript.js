const num = 5;
var flag = false;
if ((typeof num == "number") || (typeof num == "bigint")) {
	flag = true;
}
console.log(flag);