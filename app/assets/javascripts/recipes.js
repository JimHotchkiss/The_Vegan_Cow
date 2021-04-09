// Document ready function
$(() => {
  //clickHandlers();
  recipeIndex()
  getRecipeShow()
  deleteRecipeEventListener()
  sortButton()
})

const recipeIndex = () => {
  $("#recipe-index").on("click", (event) => {
    event.preventDefault()
    history.pushState(null, null, "/recipes")
    //call getRecipes() method
    getRecipes()
    closeSideBar()
  })
}

const closeSideBar = () => {
  const nav = document.querySelector(".nav-links")
  const navLinks = document.querySelectorAll(".nav-links li")
  const burger = document.querySelector(".burger")
  nav.classList.toggle("nav-active")
  burger.classList.toggle("toggle")
}

const getRecipes = () => {
  fetch("/recipes.json")
    .then((response) => response.json())
    .then((recipes) => {
      // lets clear the app-container
      $("#app-container").html("")
      recipes.forEach((recipe) => {
        // Lets build an Object Model
        let newRecipe = new Recipe(recipe)
        // Lets call our prototype
        let recipeHTML = newRecipe.formatIndex()
        // Lets append the DOM
        $("#app-container").append(recipeHTML)
      })
    })
}

const deleteRecipeEventListener = () => {
  const deleteButton = document.getElementById("delete-button")
}

const deleteRecipe = () => {}

const getRecipeShow = () => {
  // Lets grab the recipe show recipeLink
  $(document).on("click", ".recipe-link", function (event) {
    event.preventDefault()
    let id = this.dataset.id
    history.pushState(null, null, `/recipes/${id}`)
    showRecipe(id)
  })
}

// show recipe
const showRecipe = (id) => {
  fetch(`/recipes/${id}.json`)
    .then((response) => response.json())
    .then((recipe) => {
      formatShow(recipe)
    })
}

// Format show recipe
const formatShow = (recipe) => {
  $("#app-container").html("")
  let newRecipe = new Recipe(recipe)
  let showRecipe = newRecipe.showRecipe()
  $("#app-container").append(showRecipe)
}

// sort button
const sortButton = () => {
  $("#sort-recipes").on("click", () => {
    fetch("/recipes.json")
      .then((response) => response.json())
      .then((recipes) => {
        recipes.sort(function (a, b) {
          let nameA = a.title.toUpperCase() // ignore upper and lowercase
          let nameB = b.title.toUpperCase() // ignore upper and lowercase
          if (nameA < nameB) {
            //console.log(nameA, nameB)
            return -1
          }
          if (nameA > nameB) {
            return 1
          }
          // names must be equal
          return 0
        })
        $("#app-container").html("")
        showSort(recipes)
      })
  })
}

const showSort = (recipes) => {
  let app_container = $("#app-container")
  //let sort_div = app_container.append('<div class = "sort-class"></div>');
  recipes.forEach((recipe) => {
    app_container.append("<li class = 'js-list'>" + recipe.title + "</li>")
  })
}

// JavaScript Object Model
function Recipe(recipe) {
  this.id = recipe.id
  this.title = recipe.title
  this.description = recipe.description
  this.instructions = recipe.instructions
  this.category = recipe.category
}

// Recipe Index prototype
Recipe.prototype.formatIndex = function () {
  let recipeHTML = `
    <div class = "indexJSON">
      <p><a href = "/recipes/${this.id}" data-id="${this.id}" class = "recipe-link">${this.title}</a></p>
      <p>${this.description}</p>
    </div>`
  return recipeHTML
}
// Recipe Show prototype
Recipe.prototype.showRecipe = function () {
  let showRecipe = `
    <div class = "show-recipe">
      <div>
        <p id = "show-title">${this.title}</p>
        <p>${this.instructions}</p>
      </div>
      <div id="delete-button" class="delete-button">
        <p>Delete</p>
      </div>
    </div>`
  deleteRecipeEventListener()
  return showRecipe
}
