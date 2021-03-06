'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/event')
const postEvents = require('./post/event')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)

  //post dungeon
  $('#create-dungeons-form').on('submit', postEvents.onCreatePost)
  $('#show-my-post-button').on('click', postEvents.onShowMyPost)
  $('#show-all-post-button').on('click',
  postEvents.onShowPost)

  $('#dungeons').on('click', '.delete-post-button', postEvents.onDeletePost)
  $('#dungeons').on('submit', '.update-post-form', postEvents.onUpdatePost)
})
