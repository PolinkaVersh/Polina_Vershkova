//1
let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num ++;
num --;
alert(num);

//2
var speed1 = 1, speed2 = 2, distance = 100, time = 25;
distance -= speed1 * time + speed2 * time;
console.log("Speed1 = 1km/s, speed2 = 2km/s, initial distance = 100km, time = 25s");
console.log("Distance after 25s = " + distance + "km");
console.log("__________________________________________________________________________________");

//3
var edge = 2;
console.log("Edge = " + edge);
console.log("Face area of a cube = " + (edge **2));
console.log("Surface area of a cube = " + (6 * edge ** 2));
console.log("Cube volume = " + edge ** 3);

