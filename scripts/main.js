// var myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

var myImage = document.querySelector("img");

myImage.onclick = function () {
	var mySrc = myImage.getAttribute("src");
	if (mySrc === "ff-logo.png") {
		myImage.setAttribute("src", "ff-nightly.png");
	} else if (mySrc === "ff-nightly.png") {
		myImage.setAttribute("src", "ff-beta.png")
	} else {
		myImage.setAttribute("src", "ff-logo.png");
	}
}

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
	var myName =  prompt("Please enter your name.");
	localStorage.setItem("name", myName);
	myHeading.textContent = "Mozilla is cool, " + myName;
}

if(!localStorage.getItem("name")) {
	setUserName();
} else {
	var storedName = localStorage.getItem("name");
	myHeading.textContent = "Mozilla is cool, " + storedName; 
}

myButton.onclick = function () {
	setUserName();
}