// () - Anonymous Function
const navSlide = () => {
  // Here we'll grab burger and slider (nav-links)
  const burger = document.querySelector(".burger")
  const nav = document.querySelector(".nav-links")
  // Grab the individual links
  const navLinks = document.querySelectorAll(".nav-links li")

  // When we click on the menu, we want the berger to get the class of nav-active, and slide from out of view into view
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active")
    // Animate links - This shit aint working!!
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ""
      } else {
        link.style.animation = `navLinkFade 0.3s ease forwards ${
          index / 7 + 0.7
        }s`
      }
    })
    // Burger animation
    burger.classList.toggle("toggle")
  })
}
navSlide()
