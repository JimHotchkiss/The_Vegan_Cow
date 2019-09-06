// Document ready function
$(() => {
  //clickHandlers();
  categoriesIndex();
});

const categoriesIndex = () => {
  $('.caption-text').on('click', (event) => {
    event.preventDefault();
    history.pushState(null, null, '/categories');
    // From here we need to create a Categories Object Model
    console.log(event)
  })
}
