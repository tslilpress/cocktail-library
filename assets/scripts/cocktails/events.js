const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateCocktail = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.createCocktail(data)

    .then(ui.onCreateCocktailSuccess)

    .catch(ui.onCreateCocktailFailure)
}

const handleGetAllCocktails = function (event) {
  event.preventDefault()

  api.getAllCocktails()
    .then(ui.onGetAllCocktailsSuccess)
    .catch(ui.onGetAllCocktailsError)
}

const handleShowCocktail = function (event) {
  event.preventDefault()

  console.log('event.target is', event.target)

  const form = event.target
  const formData = getFormFields(form)

  console.log('formData is', formData)

  api.showCocktail(formData.cocktail.id)
    .then(ui.onShowCocktailSuccess)
    .catch(ui.onShowCocktailFailure)
}

module.exports = {
  onCreateCocktail,
  handleGetAllCocktails,
  handleShowCocktail
}
