


// ======== before REFACTORING ========

	/*

	var button = document.getElementById("enter");
	var input = document.getElementById("userinput");
	var ul = document.querySelector("ul");

	button.addEventListener("click", function() {
		if(input.value.length > 0) {
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(input.value));
			ul.appendChild(li);
			input.value = "";
		}
	})

	input.addEventListener("keypress", function(event) {
		if (input.value.length > 0 && event.keyCode === 13) {	// event.keyCode can be replace by event.which
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(input.value));
			ul.appendChild(li);
			input.value = "";
		}
	})
	*/

// ======== after REFACTORING ========
/*
	var button = document.getElementById("enter");
	var input = document.getElementById("userinput");
	var ul = document.querySelector("ul");

	function inputLength() {
		return input.value.length;
	}

	function createListElement() {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
	}

	function addListAfterClick() {
		if(inputLength() > 0) {
			createListElement();
		}
	}

	function addListAfterKeypress(event) {
		if (inputLength() > 0 && event.keyCode === 13) {
			createListElement();
		} 
	}

	button.addEventListener("click" ,addListAfterClick);	// addListAfterClick without () at the and => it's callback function - When that line of javascript runs, we don't want the addLisAfterClick function to run because we are just adding the event listener now to wait for click or keypress. We want to let it know though that we want this action to happen when a click happens. So the function now automatically gets run (gets added the ()) every time the click happens. So we are passing a reference to the function without running it.

	input.addEventListener("keypress", addListAfterKeypress);
*/





// ================ EXERCISE: DOM Events ================
/*
Using the Shopping List files from the previous videos update the shopping list app to do the following:

// 1. If you click on the list item, it toggles the .done  class on and off.

//2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

//3. BONUS: When adding a new list item, it automatically adds the delete button next to it. 

Good Luck!

Please note that: 

In the browser most code is event driven and writing interactive applications in JavaScript is often about waiting for and reacting to events, to alter the behaviour of the browser in some way. Events occur whenever something happens on a page based on user interaction. These are all defined by w3c.

To react to an event you listen for it and supply a function which will be called by the browser when the event occurs. This function is known as a callback. To read more, check out this link: https://medium.freecodecamp.org/javascript-callbacks-explained-using-minions-da272f4d9bcd

PS - if you have any questions, reach out to our community in the #js or #helpme channel on Discord (Lecture 3 provides the link if you have not yet joined)!
*/

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var deleteBtn = document.createElement("BUTTON");
	var deleteBtnText = document.createTextNode("Delete");

	deleteBtn.appendChild(deleteBtnText);
	li.appendChild(document.createTextNode(input.value + " "));
	li.appendChild(deleteBtn);
	ul.appendChild(li);
	input.value = "";

	deleteBtn.addEventListener("click", function() {
		ul.removeChild(li);
	})
}

function addListAfterClick() {
	if(inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	} 
}

function toggleItemClass(ev) {
	if (ev.target.tagName === "LI") {
		ev.target.classList.toggle("done");
	}
}

button.addEventListener("click" ,addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", toggleItemClass);



