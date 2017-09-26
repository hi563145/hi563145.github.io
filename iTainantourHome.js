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
//Flash
function Sepflash(){
	//Set Date and Time
	var date = new Date();
	var Seconds = date.getUTCSeconds()
	var Start = Seconds + 1;
	//If Update
	var FlashUpdate = setInterval(Flash,0);
	function Flash(){
		var date2 = new Date();
		var Flashval = date2.getUTCSeconds();
		if (Flashval == Start) {
		document.getElementById("sep2").style.animationName = "flash";
		document.getElementById("sep1").style.animationName = "flash";
		clearInterval(FlashUpdate);};
	};
	//Clear Update
	clearInterval(Update2)
}
//Update
var Update = setInterval(TWdate, 0);
var Update2 = setInterval(Sepflash, 0);
/* Moving Link Bar*/
function scrollpos(){
	//Finding my body tag
	var body = document.getElementById("body");
	//Find scroll Position
	var scroll = body.scrollTop;
	//Change link bar
	if(scroll < 125){document.getElementById("table").style.position = "relative";}
	else{document.getElementById("table").style.position = "fixed";document.getElementById("table").style.top = 0;document.getElementById("table").style.left = 0;};
}