/* Name */
//Asking for Name
var namevar = window.prompt("What is your name?");
//Putting Name into Website
document.getElementById("name").innerHTML = namevar;
document.getElementById("hi").innerHTML = namevar;
/* Clock */
//Creating the Clock
function TWdate() {
	//The Time
	var date = new Date();
	var UTCH = date.getUTCHours();
	var TimeHour = UTCH+8;
	var TimeH = TimeHour%24;
	if (TimeHour > 24) {document.getElementById("dateH").innerHTML = TimeH;}
	else{document.getElementById("dateH").innerHTML = TimeHour;};
	var TimeM = date.getUTCMinutes();
	var TimeS = date.getUTCSeconds();
	//Putting the Time into the website
	document.getElementById("dateM").innerHTML = TimeM;
	document.getElementById("dateS").innerHTML = TimeS;
	//Formating the Seconds and Minutes
	if (TimeS < 10) {document.getElementById("02").innerHTML = "0"}
	else {document.getElementById("02").innerHTML = " "};
	if (TimeM < 10) {document.getElementById("01").innerHTML = "0"}
	else {document.getElementById("01").innerHTML = " "};
	};
//Update
var Update = setInterval(TWdate, 500);