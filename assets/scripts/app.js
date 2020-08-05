'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/event')

$(() => {
  // your JS code goes here
})

$('.signup-view, .logged-in, .change-password-view').hide()

// Authorization event listeners
  $('#signup').on('submit', authEvents.onSignUp)
  $('#signin').on('submit', authEvents.onSignIn)
  $('#signup-button').on('click', authEvents.onSignUpSwitch)
  $('#signin-button').on('click', authEvents.onSignInSwitch)
  $('.logout-button').on('click', authEvents.onLogout)
  $('#change-password').on('submit', authEvents.onChangePassword) // Actually changes password
  $('.change-password-button').on('click', authEvents.onChangePasswordSwitch) // Changes to the change password screen
  $('#cancel-change-button').on('click', authEvents.onChangePasswordCancel) // Cancels out of change password screen
