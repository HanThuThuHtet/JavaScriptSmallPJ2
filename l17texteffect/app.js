console.log("h");

const languages = ["Nodejs","Reactjs","Vuejs","Laravel"]; //array

const colors = ["red","skyblue","violet","yellow"]; //array

const gettxtani = document.querySelector(".txtani");



//give value take index

//console.log(languages.inedxOf("Laravel")); //3
//console.log(colors[3]); //Laravel

//0-3
function* generator(){
	
	var idx = 0;

	while(true){

		yield idx++;

		if(idx > 3){
			idx = 0;
		}
	}

	


}


const testnumber = generator();
console.log(testnumber.next().value); //0
console.log(testnumber.next().value); //1
console.log(testnumber.next().value); //2
console.log(testnumber.next().value); //3




function showwords(word){

	let x = 0;

	//console.log(word);
	gettxtani.innerHTML = "";

	//gettxtani.innerHTML = word; //Nodejs

	//gettxtani.innerHTML += word[0]; //append

	let showinterval = setInterval(function(){
		//gettxtani.innerHTML += word[x];
		if(x >= word.length){

			clearInterval(showinterval);

		}else{

			gettxtani.innerHTML += word[x];
			x++;
		}
	},500);


}

let gen = generator();

showwords(languages[gen.next().value]); //Nodejs

while(true){
	showwords(languages[gen.next().value]);
}

function deletewords(){

}











// function - 3
// regular arrow generator 

// function* name(){

// }

// yield => keyword (multi return)

// next => method

// function* genfun(){
// 	yield 1;
// 	yield 2;
// 	yield 3;


// }

// const getgen = genfun();

// console.log(getgen.next().value); //1
// console.log(getgen.next().value); //2
// console.log(getgen.next().value); //3
// console.log(getgen.next().value); //undefined

// console.log(getgen.next()); //obj //know next()
// console.log(getgen.next().value); //2


