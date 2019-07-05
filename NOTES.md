I'm making a vegan recipe app called The Vegan Cow.

I've got rails to output some html by creating a controller called Welcome with the action called Index

I'm going to design this landing page to have a simple nav bar and five section: Breakfast, lunch, dinner, salads and sides, and deserts

* CSS
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.5;
  overflow-x: hidden;
}

.topnav {
  overflow: hidden;
  background-color: #F5F5F5;
  position: fixed;
  width: 100%;
}

// .clearfix fixes the float issue
.clearfix:after {
    content: ".";
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    line-height: 0;
}

.topnav a {
  float: left;
  color: red;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 20px;
}

.topnav a:hover {
  transition: background-color 0.5s ease;
  color: black;
}

.topnav a.active {
  color: black;
}

.col {
  display: inline-block;
  width: 40%;
}

a#logo-link {
  position: absolute;
  right: 575px;
  color: black;
  font-weight: 600;
  span#logo_the {
    color: red;
    font-weight: 100;
  }
  span#cow {
    color: #8B4513;

  }
}

.categories {
  width: 100%;
  height: 100vh;
}

.img-css {
  background-size: cover;
  height: 100%;
  width: 100%;
}

#breakfast_img {
  background-image: url("/assets/breakfast.jpg");
}

#lunch_img {
  background-image: url("/assets/lunch4.jpg");
}

#dinner_img {
  background-image: url("/assets/dinner.jpg");
}

#salad_sides_img {
  background-image: url("/assets/salad1.jpg");
}

#desserts_img {
  background-image: url("/assets/desserts.jpg");
}

#category_padding {
  padding-top: 53px;
  padding-bottom: 15px;
}

.meal_lable a {
  text-decoration: none;
  padding-top: 200px;
}

.img-text{
  font-size: 25px;
  position: relative;
  left: 100px;
  top: 100px;
  color: red;

}

///////// HTML /////
<!-- Header with Logo and Nav Bar-->
<div class="topnav" class="clearfix">
  <div id="nav-links" class="col">
    <a class="active" href="#home">Login</a>
    <a href="#news">View All Recipes</a>
    <a id="logo-link" href="#"><span id="logo_the">The</span> Vegan<span id="cow">Cow</span></a>
  </div>
</div>

<!-- Categories -->
<div class="categories" id="category_padding">
  <div class="img-css" id="breakfast_img">
    <div class="meal_lable">
      <a href="#"><h3 class="img-text">Breakfast</h3></a>
    </div>
  </div>
</div>
<div class="categories">
  <div class="img-css"id="lunch_img">
    <div class="meal_lable">
      <a href="#"><h3 class="img-text">Lunch</h3></a>
    </div>
  </div>
</div>
<div class="categories">
  <div class="img-css" id="dinner_img">
    <div class="meal_lable">
      <a href="#"><h3 class="img-text">Dinner</h3></a>
    </div>
  </div>
</div>
<div class="categories">
  <div class="img-css" id="salad_sides_img">
    <div class="meal_lable">
      <a href="#"><h3 class="img-text">Salads and Sides</h3></a>
    </div>
  </div>
</div>
<div class="categories">
  <div class="img-css" id="desserts_img">
    <div class="meal_lable">
      <a href="#"><h3 class="img-text">Desserts</h3></a>
    </div>
  </div>
</div>


//// JavaScript

<%= javascript_include_tag 'application', 'data-turbolinks-track': 'reload' %>


// () - Anonymous Function
const navSlide = () => {
  // Here we'll grab burger and slider (nav-links)
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    // Grab the individual links
    const navLinks = document.querySelectorAll('.nav-links li')

    // When we click on the menu, we want the berger to get the class of nav-active, and slide from out of view into view
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
    });

    // Animate links
    navLinks.forEach(function(link, index) {
      link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s';
      console.log(index / 7 + 0.2);
    });

}

navSlide();


!!!!! The only way to get the JavaScript to work, in the Rails, app was to take the javascript script tag, and put it in the body of the html. Also I had to remove 'data-turbolinks-track':'reload'!!!!!

<%= javascript_include_tag 'application', 'data-turbolinks-track': 'reload' %>


// CSS
@media screen and (max-width: 1024px){
  .nav-links {
    width: 60%;
  }
}

@media screen and (max-width: 760px){
  body{
    overflow-x: hidden;
  }
  .nav-links {
    position: absolute;
    right: 0px;
    height: 92vh;
    top: 8vh;
    background-color: lightgreen;
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 40%;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
  }
  .nav-links li {
    opacity: 0;
  }
  .burger {
    display: block;
    cursor: pointer;
  }
}

.nav-active {
  transform: translateX(0%);

}

// Annomation to have links slide @include
@keyframes: navLinksFade{
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}
