// Ready function()
$(() => {
  submitButton();
})

const submitButton = () => {
  // Grab the submit button
  $('form').submit(function(event) {
    event.preventDefault();

    let data = $(this).serialize();

    let recipe_posting = $.post('/recipes', data);

    recipe_posting.done(function(recipe) {
      $('#app-container').html("");
      let id = recipe.id
      history.pushState(null, null, `/recipes/${id}`);
      let newRecipe = new Recipe(recipe)
      let showRecipe = newRecipe.showRecipe()
      $('#app-container').append(showRecipe)
    })
  })
}
