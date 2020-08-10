'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const api = require('./api')
const ui = require('./ui')

const onCreatePost = (event) => {
  event.preventDefault()
  console.log('onCreatePost')
  const form = event.target
  const formData = getFormFields (form)
  api.createPost(formData)
    .then(ui.createPostSuccess)
    .catch(ui.failure)
}

const onUpdatePost = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const id = $(event.target).closest('section').data('id')
  api.updatePost(id, formData)
    .then(ui.updatePostSuccess)
    .catch(ui.updatePostFailure)
}

const onDeletePost = (event) => {
  event.preventDefault()
  const dungeonId = $(event.target).data('id')
  api.deletePost(dungeonId)
    .then(() => ons(event))
    .catch(ui.showWorkoutFailure)
}

const onShowPosts = function (event) {
  event.preventDefault()
  api.showWorkouts()
    .then(ui.showWorkoutsSuccess)
    .catch(ui.showWorkoutsFailure)
}

module.exports = {
  onCreatePost,
  onUpdatePost,
  onDeletePost,
  onShowPosts
}
