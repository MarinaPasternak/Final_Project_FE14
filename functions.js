var slides = document.getElementsByClassName("slid");
var currentSlide = 0;

function nextSlide(){
	goToSlide(currentSlide+1);
}

function previousSlide(){
	goToSlide(currentSlide-1);
}

function goToSlide(n)
{
	slides[currentSlide].className = "slid";
	currentSlide = (n+slides.length)%slides.length;
	slides[currentSlide].className = "slid showing";
}


function paginationButton(el)
{
	n =  el.id;
	return n;
	
}

function pagination(el)
	{
		n=paginationButton(el);
		var totalNumberOfPages = document.getElementsByClassName('page').length;
		for(var i=1; i<=totalNumberOfPages; i++){

			if (document.getElementById('page'+i)) {

				document.getElementById('page'+i).style.display='none';
				document.getElementById(i).style.backgroundColor = '#020f18';
			}
			
		}
		if (document.getElementById('page'+n)) {

			document.getElementById('page'+n).style.display='block';
			document.getElementById(n).style.backgroundColor = 'rgba(240, 36, 36, 0.849)';
		} 
	
	}

	
	    function webUrlChange() { 
		var divId = window.location.hash.toString();
		let match = Array.from(document.querySelectorAll("main div"));
		var len = document.querySelectorAll("main div").length;
		let showDiv =  document.querySelectorAll(divId+" div");
		var showDivLen = document.querySelectorAll(divId+" div").length;
		for(var i=0; i<len; i++)
		{
			match[i].style.display='none';
		}
		var showBlock=document.getElementById(divId.slice(1)).style.display='block';
		for(var i=0; i<showDivLen; i++)
		{
			showDiv[i].style.display= "";
		}
		
	}
	window.onhashchange =webUrlChange;
	document.addEventListener("DOMContentLoaded",webUrlChange);
	