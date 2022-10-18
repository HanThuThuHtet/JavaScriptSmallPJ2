console.log("h");

var gettextarea = document.getElementById("textarea");


function boldfun(){
	gettextarea.style.fontWeight = "bold";
}

function italicfun(){
	gettextarea.style.fontStyle = "italic";
}

function underllinefun(){
	gettextarea.style.textDecoration = "underline";
}

function lalgfun(){

	gettextarea.style.textAlign = "left";
}
function calgfun(){
	gettextarea.style.textAlign = "center";
}

function ralgfun(){
	
	gettextarea.style.textAlign = "right";
}

function upcasefun(){
	
	gettextarea.style.textTransform = "uppercase";
}


function lwcasefun(){
	
	gettextarea.style.textTransform = "lowercase";
}


function capcasefun(){
	gettextarea.style.textTransform = "capitalize";
}


function clearfun(){

	gettextarea.style.fontWeight = "normal";
	gettextarea.style.fontStyle = "normal";
	gettextarea.style.textDecoration = "none";
	gettextarea.style.textAlign = "left";
	gettextarea.style.textTransform = "none";
	gettextarea.value = "";
}

