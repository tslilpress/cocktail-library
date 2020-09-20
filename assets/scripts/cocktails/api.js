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

module.exports = {
  createCocktail,
  getAllCocktails
}
