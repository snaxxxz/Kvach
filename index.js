
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let slideInterval;
function startSlider() {
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
}
document.querySelector('.hero-slider').addEventListener('mouseenter', () =>{
    clearInterval(slideInterval);
});
document.querySelector('.hero-slider').addEventListener('mouseleave',startSlider);
function changeSlide(n) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  
  currentSlide = (currentSlide + n + slides.length) % slides.length;
  
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function goToSlide(n) {
    changeSlide(n - currentSlide);
}
startSlider();
document.querySelectorAll('.anatomy-point').forEach(point => {
  point.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
      document.querySelectorAll('.anatomy-item').forEach(item => {
          item.classList.remove('highlight');
      });
      targetElement.classList.add('highlight');
      
      setTimeout(() => {
          targetElement.classList.remove('highlight');
      }, 2000);
  });
});