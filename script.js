const left = document.getElementById('left');
const right = document.getElementById('right');
const slides = document.querySelectorAll('.slide');
const body = document.body;

console.log(slides);
console.log(slides[0]);
let count = 0;
setBodyBack();
setActiveSlide();

right.addEventListener('click', () => {
  count++;
  if (count > slides.length - 1) {
    count = 0;
  }
  setBodyBack();
  setActiveSlide();
});

left.addEventListener('click', () => {
  count--;
  if (count <= 0) {
    count = slides.length - 1;
  }
  setBodyBack();
  setActiveSlide();
});

function setBodyBack() {
  body.style.backgroundImage = slides[count].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((i) => {
    i.classList.remove('active');
  });
  slides[count].classList.add('active');
}
