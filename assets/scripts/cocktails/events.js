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

module.exports = {
  onCreateCocktail,
  handleGetAllCocktails
}
