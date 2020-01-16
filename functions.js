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
	return parseInt(n)
}	
function paginationArrowNext()
{
   num = paginationButton(el)

}