// Document ready function
$(() => {
  //clickHandlers();
  recipeIndex();
  getRecipeShow();
});

const recipeIndex = () => {
  $('#recipe-index').on('click', (event) => {
    event.preventDefault();
    // Lets update the url to /recipes
    history.pushState(null, null, '/recipes');
    //call getRecipes() method
    getRecipes();
  })
}

const getRecipes = () => {
  fetch('/recipes.json')
    .then(response => response.json())
    .then(recipes => {
      // lets clear the app-container
      // # Could be another function
      $('#app-container').html("")
      recipes.forEach(recipe => {
        // Lets build an Object Model
        let newRecipe = new Recipe(recipe)
        // Lets call our prototype
        let recipeHTML = newRecipe.formatIndex()
        // Lets append the DOM
        $('#app-container').append(recipeHTML)
      })
  })
}

const getRecipeShow = () => {
// Lets grab the recipe show recipeLink
  $(document).on('click', '.recipe-link', function(event) {
    event.preventDefault();
    let id = this.dataset.id;
    history.pushState(null, null, `/recipes/${id}`);
    showRecipe(id);
  })
}

// show recipe
const showRecipe = (id) => {
  fetch(`/recipes/${id}.json`)
    .then(response => response.json())
    .then(recipe => {
      formatShow(recipe);
    })
}

// Format show recipe
const formatShow = (recipe) => {
  $('#app-container').html("")
  let newRecipe = new Recipe(recipe)
  let showRecipe = newRecipe.showRecipe()
  $('#app-container').append(showRecipe)
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
Recipe.prototype.formatIndex = function(){
  let recipeHTML = `
    <div class = "indexJSON">
      <p><a href = "/recipes/${this.id}" data-id="${this.id}" class = "recipe-link">${this.title}</a></p>
      <p>${this.description}</p>
    </div>`
  return recipeHTML
}
// Recipe Show prototype
Recipe.prototype.showRecipe = function(){
  let showRecipe = `
    <div class = "show-recipe">
      <p id = "show-title">${this.title}</p>
      <p>${this.instructions}</p>
    </div>`
  return showRecipe
}
