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
        recipes.forEach(recipe => {
          $('#app-container').html(`<a href="#">${recipe.title}</a>`)
        })
      })
  })
}
