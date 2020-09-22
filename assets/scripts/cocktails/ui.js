const store = require('./../store')
// const cocktailApi = require('./api')

const onCreateCocktailSuccess = function (res) {
  store.cocktail = res.cocktail
  $('#create-cocktail').trigger('reset')
  $('#new-cocktail-message').text('Great! Your new cocktail was created!')
  // console.log(res.cocktail)
  // console.log(res.cocktail._id)
}

const onCreateCocktailFailure = function (res) {
  $('#new-cocktail-message').text('oops, Something went wrong. Try again.')
}

const onGetAllCocktailsSuccess = function (res) {
  console.log(res)
  let cocktailsHTML = ''
  res.cocktails.forEach(function (cocktail) {
    const cocktailHTML = (`
      <div>
        <h4>${cocktail.name}</h4>
        <p>Preparation: ${cocktail.preparation}</p>
        <p>Serve in: ${cocktail.serveIn}</p>
        <p>How to serve : ${cocktail.howToServe}</p>
        <p>Garnish: ${cocktail.garnish}</p>
        <p>ingredients: ${cocktail.ingredients}</p>
        <p>Note: ${cocktail.note}</p>
        <p>ID: ${cocktail._id}</p>
      </div>
      `)
    cocktailsHTML += cocktailHTML
  })
  $('#all-cocktails-content').html(cocktailsHTML)
}

const onGetAllCocktailsError = function (err) {
  $('#all-cocktails-err-message').text('oops, something went wrong. Try again')
}


const onShowCocktailSuccess = function (res) {
  store.cocktail = res.cocktail
  console.log('res is', res)
  const cocktail = res.cocktail
  const cocktailHTML = (`
    <div>
      <h4>${cocktail.name}</h4>
      <p>Preparation: ${cocktail.preparation}</p>
      <p>Serve in: ${cocktail.serveIn}</p>
      <p>How to serve : ${cocktail.howToServe}</p>
      <p>Garnish: ${cocktail.garnish}</p>
      <p>ingredients: ${cocktail.ingredients}</p>
      <p>Note: ${cocktail.note}</p>
      <p>ID: ${cocktail._id}</p>
    </div>
    `)
  $('#id-err').text('')
  $('#delete-message').text('')
  $('#single-cocktail-content').html(cocktailHTML)
  $('#search-cocktail').trigger('reset')
  $('#edit-delete-buttons').show()
  $('#update-cocktail').hide()
  $('#update-name').attr('value', store.cocktail.name)
  $('#update-preparation').attr('value', store.cocktail.preparation)
  $('#update-Served-in').attr('value', store.cocktail.serveIn)
  $('#upadate-how-to-serve').attr('value', store.cocktail.howToServe)
  $('#update-garnish').attr('value', store.cocktail.garnish)
  $('#update-ingredients').attr('value', store.cocktail.ingredients)
  $('#update-note').attr('value', store.cocktail.note)
  $('#update-id').text(`ID: ${store.cocktail._id}`)
}

const onShowCocktailFailure = function (err) {
  $('#search-cocktail').trigger('reset')
  $('#id-err').text('Please enter a valid Id')
  $('#delete-message').text('')
  $('#single-cocktail-content').html('')
  $('#update-cocktail').hide()
  $('#edit-delete-buttons').hide()
}

const onUpdateCocktailSuccess = function (res) {
  $('#update-cocktail-message').text('The cocktail has been updated')
  $('#update-cocktail').hide()
  $('#single-cocktail-content').html('')
  $('#edit-delete-buttons').hide()
  // console.log('res is ', res)
  // console.log('data is ', store.cocktail)
  // const id = store.cocktail._id
  // cocktailApi.showCocktail(id)
  //   .then(cocktailApi.updateCocktail(id))
  //   .catch()
}

const onUpdateCocktailFailure = function (err) {
  $('#update-cocktail-message').text('Oops, something went wrong. try again.')
}

const onDeleteCocktailSuccess = function (res) {
  $('#single-cocktail-content').html('')
  $('#delete-message').text('Cocktail deleted')
  $('#edit-delete-buttons').hide()
}


module.exports = {
  onCreateCocktailSuccess,
  onCreateCocktailFailure,
  onGetAllCocktailsSuccess,
  onShowCocktailSuccess,
  onShowCocktailFailure,
  onUpdateCocktailSuccess,
  onDeleteCocktailSuccess
}
