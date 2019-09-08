// Document ready function
$(() => {
  //clickHandlers();
  categoryRecipesShow();
});

const categoryRecipesShow = () => {
  $(document).on('click', '.caption-text', function(event) {
    event.preventDefault();
    let id = this.dataset.id
    history.pushState(null, null, `/categories/${id}`);
    getCategoryRecipes(id);
  })
}

// getCategory()
const getCategoryRecipes = (id) => {
  fetch(`/categories/${id}.json`)
  .then(response => (response.json()))
  .then(categoryRecipes => {
    let categoryRecipesArray = categoryRecipes.recipes
    showCategoryRecipes(categoryRecipesArray);
  })
}

// showCategoryRecipes
const showCategoryRecipes = (categoryRecipesArray) => {
  $('#app-container').html("")
  categoryRecipesArray.forEach(categoryRecipe => {
    // Create Object Model
    let newCategoryRecipe = new CategoryRecipe(categoryRecipe)
    let showCatRecipe = newCategoryRecipe.showCategoryRecipe()
    $('#app-container').append(showCatRecipe)
  })
}

// CategoryRecipe Object Model
function CategoryRecipe(categoryRecipe) {
  this.id = categoryRecipe.id
  this.title = categoryRecipe.title
  this.description = categoryRecipe.description
  this.instructions = categoryRecipe.instructions
}

// Recipe Show prototype
CategoryRecipe.prototype.showCategoryRecipe = function(){
  let showCategoryRecipe = `
    <div class = "show-category-recipe">
      <h3 id = "show-recipe-title"><a href = "/recipes/${this.id}" data-id="${this.id}" class = "recipe-link">${this.title}</a></h3>
      <p>${this.description}</p>
    </div>`
  return showCategoryRecipe
}
