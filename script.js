// MOBILE MENU
function toggleMenu(){
  document.getElementById("nav-menu").classList.toggle("show");
}

// SLIDER
let slideIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

function moveSlide(step){
  slideIndex += step;
  if(slideIndex < 0) slideIndex = totalSlides - 1;
  if(slideIndex >= totalSlides) slideIndex = 0;
  updateSlide();
}

function updateSlide(){
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// AUTO SLIDE
setInterval(()=> moveSlide(1), 4000);

// SWIPE (MOBILE)
let startX = 0;

slides.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

slides.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;
  if(startX - endX > 50) moveSlide(1);
  if(endX - startX > 50) moveSlide(-1);
});
