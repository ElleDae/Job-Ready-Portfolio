function changeSlide(n) {
	showSlides(slideIndex += n);
  }
  
  function showSlides(n) {
	let i;
	const slides = document.getElementsByClassName("carousel-item");
	if (n >= slides.length) { slideIndex = 0 }
	if (n < 0) { slideIndex = slides.length - 1 }
	for (i = 0; i < slides.length; i++) {
	  slides[i].classList.remove("active");
	}
	slides[slideIndex].classList.add("active");
  }
  
  let slideIndex = 0;
  showSlides(slideIndex);