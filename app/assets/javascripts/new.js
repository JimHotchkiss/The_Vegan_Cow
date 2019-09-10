// Ready function()
$(() => {
  submitButton();
})

const submitButton = () => {
  // Grab the submit button
  $('form').submit(function(event) {
    event.preventDefault();

    let values = $(this).serialize();

    let recipe_posting = $.post('/recipes', values);

    recipe_posting.done(function(recipe) {
      $('#app-container').html("");
      let id = recipe.id
      let newRecipe = new Recipe(recipe)
      let showRecipe = newRecipe.showRecipe()
      history.pushState(null, null, `/recipes/${id}`);
      $('#app-container').append(showRecipe)
    })
  })
}
