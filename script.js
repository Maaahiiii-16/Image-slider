const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let counter = 0;
const size = slider.clientWidth;

nextBtn.addEventListener('click', () => {
  if (counter >= slider.children.length - 1) counter = -1;
  counter++;
  slider.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) counter = slider.children.length;
  counter--;
  slider.style.transform = `translateX(${-size * counter}px)`;
});