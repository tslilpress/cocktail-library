const config = require('./../config')
const store = require('./../store')

const createIngredient = function (data) {
  return $.ajax({
    url: config.apiUrl + '/ingredients',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

module.exports = {
  createIngredient
}
