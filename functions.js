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
