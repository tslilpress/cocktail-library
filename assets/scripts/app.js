'use strict'
const authEvents = require('./auth/events')
const cocktailsEvents = require('./cocktails/events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-in-form').hide()
  $('.navbar').hide()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out-form').on('submit', authEvents.onSignOut)
  $('#in-button').on('click', function () {
    $('#sign-up-form').hide()
    $('#sign-in-form').show()
  })
  $('#create-cocktail').on('submit', cocktailsEvents.onCreateCocktail)
  $('#get-all-cocktails').on('click', cocktailsEvents.handleGetAllCocktails)
})
