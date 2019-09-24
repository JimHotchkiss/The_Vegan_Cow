// Ready function()
$(() => {
  submitButton();
})

const submitButton = () => {
  // Grab the submit button
  $('#new_recipe').on('submit', function(event) {
    event.preventDefault();

    // this grabs the data in the form
    let data = $(this).serialize();

    // now we make a post request to the server,
    // passing in the url and the data
    let recipe_posting = $.post('/recipes', data);

    // our data (recipe) gets returned form our post create controller
    recipe_posting.done(function(recipe) {
      console.log(recipe)
      $('#app-container').html("");
      let id = recipe.id
      history.pushState(null, null, `/recipes/${id}`);
      let newRecipe = new Recipe(recipe)
      let showRecipe = newRecipe.showRecipe()
      $('#app-container').append(showRecipe)
    })
  })
}
