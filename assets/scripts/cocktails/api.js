const config = require('./../config')
const store = require('./../store')

const createCocktail = function (data) {
  return $.ajax({
    url: config.apiUrl + '/cocktails',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const getAllCocktails = function () {
  return $.ajax({
    url: config.apiUrl + '/cocktails',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const showCocktail = function (cocktailId) {
  console.log(cocktailId)
  return $.ajax({
    url: config.apiUrl + '/cocktails/' + `${cocktailId}`,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateCocktail = function (formData) {
  const cocktailId = store.cocktail._id
  // console.log('cocktail id is', cocktailId)
  return $.ajax({
    url: config.apiUrl + '/cocktails/' + `${cocktailId}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

const deleteCocktail = function (id) {
  return $.ajax({
    url: config.apiUrl + '/cocktails/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createCocktail,
  getAllCocktails,
  showCocktail,
  updateCocktail,
  deleteCocktail
}
