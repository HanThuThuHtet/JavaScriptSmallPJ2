console.log('h');

var getpages = document.getElementsByClassName('page');
console.log(getpages); //htmlcollection

var getdots = document.getElementsByClassName('dot');
var getform = document.getElementById('form');
var getprevbtn = document.getElementById('prevbtn');
var getnextbtn = document.getElementById('nextbtn');

const getrstcontainer = document.getElementById('result-container');

var objkeys = ["email","password","firstname","lastname","dob","phone","address"]; 
var datas = [];



var curridx = 0;

showpage(curridx);

function showpage(num){
	//console.log(num);

	
	getpages[num].style.display = "block";

	 num === 0 ? getprevbtn.style.opacity="0" : getprevbtn.style.opacity = "1";

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

		if(num === 1 && !formvalidation()) return false; //break //stop

		getpages[curridx].style.display = "none";

		curridx = curridx + num ;

		if(curridx >= getpages.length){

			//getform.submit();

			getform.style.display = 'none';

			getrstcontainer.style.display = 'block';

			result(datas);

			return false; //4 index uncatch
		}


		showpage(curridx);


		

}



function* genfun(){
	var index = 0;
	while(index < objkeys.length){
		yield index++;
	}
}

//console.log(genfun().next().value);

let gen = genfun();
//console.log(gen.next().value);



function formvalidation(){

	var valid = true;

	var getcurrinput = getpages[curridx].getElementsByTagName('input');

	for(var x = 0 ; x < getcurrinput.length ; x++){

		//console.log(getcurrinput[x].value);

		if(getcurrinput[x].value === ''){

			getcurrinput[x].classList.add("invalid");
			valid = false;

		}else{

			//console.log(getcurrinput[x].value);

			// var obj = {
			// 	key : getcurrinput[x].value
			// } // 0 1 because of curridx

			//console.log('gen value is ', gen.next().value); //from gen fun

				//Start Method 1

				// const keys = objkeys[gen.next().value];
				// //console.log(keys);

				// const values = getcurrinput[x].value;
				// //console.log(values);

				// var obj = {
				// 	[keys]: values 
				// 	//use [] => to let them know variable 
				// 	// obj to be dynamic 
				// }
				//datas.push(obj);
				//End Method 1


				//Start Method 2
				// const keys = objkeys[gen.next().value];
				//  const values = getcurrinput[x].value;
				//  var obj = {};
				//  obj[keys] = values;
				//  datas.push(obj);
				//End Method 2

				//Start Method 3
				const keys = objkeys[gen.next().value];
				 const values = getcurrinput[x].value;
				 
				 datas.push({[keys]:values});
				//End Method 3

			//datas.push(obj);
			//datas.push(getcurrinput[x].value);

		}
	}

	if(valid){ //true

		getdots[curridx].className += " done";

	}

	return valid;
}


function result(data){

	//console.log(data);

	getrstcontainer.innerHTML = `
		<ul>
			<li>Name : ${data[2].firstname} ${data[3].lastname}</li>
			<li>Email : ${data[0].email}</li>
			<li>DoB : ${data[4].dob}</li>
			<li>Phone : ${data[5].phone}</li>
			<li>Address : ${data[6].address}</li>
		</ul>
		<button type="submit" class="submit-btn" onclick="submitbtn()">Apply now</button>
	`

}

function submitbtn(){
	getform.submit();
}



// curid 0;

// function gonow(num){
// 	curid += num
// 	showpage(curid);
// }

// showpage(curid);

// function showpage(num){
// 	num = show ;
// }