// () - Anonymous Function
const navSlide = () => {
  // Here we'll grab burger and slider (nav-links)
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    // When we click on the menu, we want the berger to get the class of nav-active
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
    });
}

navSlide();
