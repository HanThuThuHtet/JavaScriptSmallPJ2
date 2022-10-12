console.log("h");

const getdisplay = document.querySelector(".display");
const getstartbtn = document.querySelector(".start");
const getstopbtn = document.querySelector(".pause");
const getresetbtn = document.querySelector(".reset");

// var hours = 0 ,
// 	minutes = 0 ,
// 	seconds = 0 ,
// 	milliseconds = 0;
// console.log(hours);

var [hours,minutes,seconds,milliseconds] = [0,0,,0,0];

getstartbtn.addEventListener('click',starttime);
getstopbtn.addEventListener('click',stoptime);
getresetbtn.addEventListener('click',resettime);

var setinvdisplay;

function starttime(){
	//console.log("starttime");

	showdisplay();

	setinvdisplay = setInterval(showdisplay,100);



}



function stoptime(){

	console.log("stoptime");

	clearInterval(setinvdisplay);
}



function resettime(){

	console.log("resettime");

}



function showdisplay(){

	//console.log("h");

	milliseconds += 100;

	if(milliseconds === 1000){

		milliseconds = 0;
		seconds++;

		if(seconds === 60){
			seconds = 0;
			minutes++;

			if(minutes === 60){
				minutes  = 0;
				hours++;

				
			}
		}
	}


}