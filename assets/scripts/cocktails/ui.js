const store = require('./../store')

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
  // store.cocktail = res.cocktail
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
  $('#single-cocktail-content').html(cocktailHTML)
  $('#search-cocktail').trigger('reset')
}

const onShowCocktailFailure = function (err) {
  $('#search-cocktail').trigger('reset')
  $('#id-err').text('Please enter a valid Id')
  $('#single-cocktail-content').html('')
}

module.exports = {
  onCreateCocktailSuccess,
  onCreateCocktailFailure,
  onGetAllCocktailsSuccess,
  onShowCocktailSuccess,
  onShowCocktailFailure
}
