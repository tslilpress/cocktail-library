const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const onCreateIngredient = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.createIngredient(data)

    .then(ui.onCreateIngredientSuccess)

    .catch(ui.onCreateIngredientFailure)
}

module.exports = {
  onCreateIngredient
}
