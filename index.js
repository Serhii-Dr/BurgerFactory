// DOM Nodes

const elements = document.querySelectorAll('.appear');
const items = document.querySelectorAll('.meal-item__details');
const burgerBtn = document.querySelector('.burger-menu');
const closeIcon = document.querySelector('.close-item');
const dropdown = document.querySelector('.burger-dropdown');

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
  dropdown.classList.toggle('open')
});

closeIcon.addEventListener('click', function(){
  dropdown.classList.remove('open');
})