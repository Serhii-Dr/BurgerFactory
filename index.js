const elements = document.querySelectorAll('.appear');
const items = document.querySelectorAll('.meal-item__details');

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
