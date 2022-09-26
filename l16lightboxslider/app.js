console.log('h');

var getimgs = document.querySelectorAll('.img');//nodelist

var getbtnclose = document.querySelector('.btn-close');
var getmodal = document.querySelector('.modal');

var getviews = document.getElementsByClassName('view');
console.log(getviews); //html collection

var getcounter = document.querySelector('.counter');
var getcaption = document.querySelector('.caption');

var getpervbtn = document.querySelector('.prev');
var getnextbtn = document.querySelector('.next');

var getnoactives = document.getElementsByClassName('noactive');
//console.log(getnoactives);//html collection

var curidx = 1;


for(var i=0; i < getimgs.length; i++){
	console.log(getimgs[i]);

	//getimgs[i].addEventListener('click',showmodal);

	getimgs[i].addEventListener('click',function(e){

		showmodal();

		// console.log(e.target.alt);
		// console.log(this.alt);


		const findids = this.alt.split('').filter(rmspace=>rmspace.trim() !== "");
		//console.log(findids);

		//console.log(findids[findids.length-1]);




		curidx =Number(findids[findids.length-1]);
		slideshow(curidx);
		console.log(typeof curidx); //String

		slideshow(curidx);

	});



}

function showmodal(){

	getmodal.style.display = "block";
}



getbtnclose.addEventListener('click',function(){

	getmodal.style.display = "none";

});



//close modal 
document.addEventListener('click',function(e){

	//console.log(e.target); //modal

	if(e.target === getmodal){
		getmodal.style.display = "none";
	}

});


// getbtnclose.onclick = function(){
// 	getmodal.style.display = "none";
// }

function currentview(num){

	slideshow(num);

}


getnextbtn.addEventListener('click',function(){
	
	slideshow(curidx += 1);


});

getpervbtn.addEventListener('click',function(){
	
	slideshow(curidx -= 1);

});


//slideshow(curidx);


function slideshow(num){

	//console.log(num);

	var x;

	for(x =0 ; x < getviews.length ; x++){
		getviews[x].style.display = "none";
	}

	for(x = 0 ; x < getnoactives.length ; x++){
		
		 getnoactives[x].classList.remove("active");
		 //getnoactives[x].className = getnoactives[x].className.replace(" active","");
	}

	if(num > getviews.length){
		num = 1;
		curidx = 1;
	}

	if(num < 1){
		num = getviews.length;
		curidx = getviews.length;

	}

	// console.log("curidx",curidx);
	// console.log("num",num);

	getcounter.textContent = `${num} / ${getviews.length}`;

	getviews[num-1].style.display = "block";

	getnoactives[num-1].className += " active"; 
	//idx 0

	getcaption.innerText = getnoactives[num-1].alt;




}






