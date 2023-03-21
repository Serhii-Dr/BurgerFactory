const elements = document.querySelectorAll('.appear');

window.addEventListener('scroll', function () {
  const scrollPosition = this.window.scrollY + this.window.innerHeight;
  elements.forEach((element) => {
    const elemPosition = element.offsetTop;
    if (scrollPosition > elemPosition) {
      element.classList.add('scrollAnimation');
    }
  });
});
