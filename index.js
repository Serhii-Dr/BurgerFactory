// DOM Nodes

const elements = document.querySelectorAll('.appear');
const items = document.querySelectorAll('.meal-item__details');
const burgerBtn = document.querySelector('.burger-menu');
const closeIcon = document.querySelector('.close-item');
const dropdown = document.querySelector('.burger-dropdown');
const nextArrowBtn = document.querySelector('.arrow-right');
const prevArrowBtn = document.querySelector('.arrow-left');
const slider = document.querySelector('.ingredients-section__slider');

// Listeners

window.addEventListener('scroll', function () {
  const scrollPosition = this.window.scrollY + this.window.innerHeight;
  elements.forEach((element) => {
    const elemPosition = element.offsetTop;
    if (scrollPosition > elemPosition) {
      element.classList.add('scrollAnimation');
    }
  });
});

items.forEach((item) => {
  item.addEventListener('click', function () {
    item.textContent === 'Details'
      ? (item.textContent = 'Reduce')
      : (item.textContent = 'Details');
    item.previousElementSibling.classList.toggle('d-none');
  });
});

burgerBtn.addEventListener('click', function () {
  dropdown.classList.toggle('open');
  this.classList.toggle('lines-animation');
});

closeIcon.addEventListener('click', function () {
  dropdown.classList.remove('open');
  burgerBtn.classList.remove('lines-animation');
});

let currentIndex = 0;

nextArrowBtn.addEventListener('click', function () {
  const windowWidth = window.innerWidth;
  if (currentIndex < slider.children.length - 1) {
    currentIndex++;
    slider.style.transform = `translateX(-${
      currentIndex * (windowWidth > 1000 ? 100 : 250)
    }px)`;
  }
});

prevArrowBtn.addEventListener('click', function () {
  const windowWidth = window.innerWidth;
  if (currentIndex > 0) {
    currentIndex--;
    slider.style.transform = `translateX(-${
      currentIndex * (windowWidth > 1000 ? 100 : 250)
    }px)`;
  }
});
