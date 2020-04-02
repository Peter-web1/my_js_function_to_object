alert('hello');
let car = {
	color:'red',
};
let car2 = {
	color:'green',
};
console.log(car.color);
console.log(car2.color);

colorChange(car);

function colorChange(theCar){
	theCar.color = 'aqwa';
	
}
colorChange(car2);
console.log("Car: " + car.color);
console.log("Car2: " + car2.color);
