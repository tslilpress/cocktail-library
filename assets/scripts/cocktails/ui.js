const store = require('./../store')

const onCreateCocktailSuccess = function (res) {
  $('#create-cocktail').trigger('reset')
  $('#new-cocktail-message').text('Great! Your new cocktail was created!')
}

const onCreateCocktailFailure = function (res) {
  $('#new-cocktail-message').text('oops, Something went wrong. Try again.')
}

const onGetAllCocktailsSuccess = function (res) {
  let cocktailsHTML = ''
  res.cocktails.forEach(function (cocktail) {
    const cocktailHTML = (`
      <div>
        <h4>${cocktail.name}</h4>
        <p>Preparation: ${cocktail.preparation}</p>
        <p>Serve in: ${cocktail.serveIn}</p>
        <p>How to serve : ${cocktail.howToServe}</p>
        <p>Garnis: ${cocktail.garnish}</p>
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


module.exports = {
  onCreateCocktailSuccess,
  onCreateCocktailFailure,
  onGetAllCocktailsSuccess
}
