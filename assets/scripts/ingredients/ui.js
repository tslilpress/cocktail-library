const store = require('./../store')

const onCreateIngredientSuccess = function (res) {
  $('#add-ingredients-form').trigger('reset')
  $('#add-ingredient-message').text('Ingredient added. Add another or click done.')
}

const onCreateIngredientFailure = function (res) {
  $('#new-cocktail-message').text('oops, Something went wrong. Try again.')
}


module.exports = {
  onCreateIngredientSuccess,
  onCreateIngredientFailure
}
