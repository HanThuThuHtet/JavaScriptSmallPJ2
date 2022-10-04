console.log('h');

var getpages = document.getElementsByClassName('page');
console.log(getpages); //htmlcollection

var getdots = document.getElementsByClassName('dot');
var getform = document.getElementById('form');
var getprevbtn = document.getElementById('prevbtn');
var getnextbtn = document.getElementById('nextbtn');

var curridx = 0;

showpage(curridx);

function showpage(num){
	//console.log(num);

	
	getpages[num].style.display = "block";

	 num === 0 ? getprevbtn.style.display="none" : getprevbtn.style.display = "inline-block";

	 num === (getpages.length-1) ? getnextbtn.textContent = "Submit" : getnextbtn.textContent = "Next";

	dotindicator(num);
};


function dotindicator(num){
	//console.log(num);

	for(var x=0 ; x < getdots.length ; x++){
		 
		 getdots[x].classList.remove("active");
	}

	getdots[num].classList.add("active");
	// getdots[num].className += " active";

}




function gonow(num){

	// if( num === 1 && formvalidation()){ //next 1 in html

	// 	getpages[curridx].style.display = "none";

	// 	curridx = curridx + num ;

	// 	if(curridx >= getpages.length){

	// 		getform.submit();
	// 	}

	// 	showpage(curridx);

	// 	}


		// if(num ===1 && !formvalidation()){
		// 	return false;
		// }

		if(num ===1 && !formvalidation()) return false;

		getpages[curridx].style.display = "none";

		curridx = curridx + num ;

		if(curridx >= getpages.length){

			getform.submit();
		}

		showpage(curridx);


		

}



function formvalidation(){

	var valid = true;

	var getcurrinput = getpages[curridx].getElementsByTagName('input');

	for(var x = 0 ; x < getcurrinput.length ; x++){

		console.log(getcurrinput[x].value);

		if(getcurrinput[x].value === ''){

			getcurrinput[x].classList.add("invalid");
			valid = false;

		}
	}

	if(valid){ //true

		getdots[curridx].className += " done";

	}

	return valid;
}

