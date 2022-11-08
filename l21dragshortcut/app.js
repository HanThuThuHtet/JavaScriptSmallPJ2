console.log("hi");

const getbox = document.querySelector(".box");

dragme(getbox);

function dragme(getele){

	//console.log(getele);

	var getcx , getcy , setcx , setcy ; //client

	getele.onmousedown = getmousedown;

	function getmousedown(e){

		//console.log("down");
		//console.log(e.target); //box

		getcx = e.clientX ;
		getcy = e.clientY ;
		//console.log(getcx,getcy); //fixed div boxtitle

		document.onmousemove = dragme;

		document.onmouseup = stopdragme ;


	}

	function dragme(e){

		//console.log(e.target); //div boxtitle

		//console.log("new position",e.clientX,e.clientY); // div move in document

		setcx = getcx - e.clientX;
		setcy = getcy - e.clientY;

		getcx = e.clientX;
		getcy = e.clientY;

		const btnleft = getele.offsetLeft;
		const btntop = getele.offsetTop;
		//console.log(btnleft.btntop);

		getele.style.left = (btnleft - setcx)+"px" ;
		getele.style.top = (btntop - setcy) + "px" ;


	}

	function stopdragme(){
		document.onmousemove = null;
		document.onmouseup = null;
	}


}