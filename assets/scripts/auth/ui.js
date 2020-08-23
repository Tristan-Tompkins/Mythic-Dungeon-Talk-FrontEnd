'use strict'

const store = require('../store')


const signUpSuccess = function (response) {
  $('#message').text('You are signed up!')
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#message').text('Please try again.')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#message').text('You are all signed in!')
  $('form').trigger('reset')
  $('.auth').show()
  $('.unauth').hide()
}

const signInFailure = function () {
  $('#message').text('Please try again.')
  $('form').trigger('reset')
}

const changePasswordSuccess = function (response) {
  $('#message').text('Your password has been changed.')
  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#message').text('Please try again.')
  $('form').trigger('reset')
}

const signOutSuccess = function (response) {
  $('#message').text('Come again!')
  $('.auth').hide()
  $('.unauth').show()
  store.user = null
  $('#dungeons').hide()
}

const signOutFailure = function () {
  $('#message').text('Please try again.')
}



module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
