// Document ready function
$(() => {
  clickHandlers();
});

const clickHandlers = () => {
  $('#recipe-index').on('click', (event) => {
    event.preventDefault();
    // Now lets get the data through the Fetch API
    fetch('/recipes.json')
      .then(response => response.json())
      .then(recipes => {
        // lets clear the app-container
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
  })
}

// JavaScript Object Model
function Recipe(recipe) {
  debugger
  this.id = recipe.id
  this.title = recipe.title
  this.description = recipe.description
  this.instructions = recipe.instructions
  this.category = recipe.category
}

// Recipe prototype
Recipe.prototype.formatIndex = function(){
  let recipeHTML = `
    <div class = "indexJSON">
      <p><a href = "#" class = "indexTitle">${this.title}</a></p>
      <p>${this.description}</p>
    </div>`
  return recipeHTML
}
