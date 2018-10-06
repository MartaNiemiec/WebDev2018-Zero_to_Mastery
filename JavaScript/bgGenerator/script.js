var _ = require('lodash')

var array = [1,2,3,4,5,6,7,8];
console.log('answer: ', _.without(array, 3))	//"_.without"=lodash method with two parameters (array, without which item will be a new array)
//to works it we have update our bundle.js file in command line


var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomNrBtn = document.getElementById("randomNrBtn");

window.onload = setGradient;

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}


function randomColor() {	//thi function returns a radom hex color
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}


function randomBg() {	//this function set a random background gradient
	color1.value = randomColor();
	color2.value = randomColor();

	setGradient();
}


color1.addEventListener("input", setGradient);
color1.addEventListener("change", setGradient);

color2.addEventListener("input", setGradient);
color2.addEventListener("change", setGradient);

randomNrBtn.addEventListener("click", randomBg);

/*
A few things you can try: 

1. Write code so that the colour inputs match the background generated on the first page load. 

2. Display the initial CSS linear gradient property on page load.

3. BONUS: Add a random button which generates two random numbers for the colour inputs.

Good luck!
 */






