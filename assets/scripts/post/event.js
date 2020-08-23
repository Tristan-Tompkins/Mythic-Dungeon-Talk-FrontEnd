'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const api = require('./api')
const ui = require('./ui')

const onCreatePost = function (event) {
  //event.preventDefault()
  if (event) { event.preventDefault() }
  //event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  //console.log(formData)
  api.createPost(formData)
    .then(ui.createPostSuccess)
    .catch(ui.failure)
}

const onUpdatePost = function (event) {
  if (event) { event.preventDefault() }
  const form = event.target
  const formData = getFormFields(form)
  const id = $(event.target).data('id')
  api.updatePost(id, formData)
    .then(ui.updatePostSuccess)
    .catch(ui.failure)
}

const onDeletePost = (event) => {
  if (event) { event.preventDefault() }
  //console.log(event)
  const dungeonId = $(event.target).data('id')
  api.deletePost(dungeonId)
    .then(ui.deletePostSuccess)
    .catch(ui.failure)
}

const onShowPost = () => {
  if (event) { event.preventDefault() }
  api.showPost()
    .then(ui.showPostSuccess)
    .catch(ui.failure)
}
const onShowMyPost = () => {
  if (event) { event.preventDefault() }
  api.showMyPost()
    .then(ui.showMyPostSuccess)
    .catch(ui.failure)
}

// const addHandlers = () => {
//   $('#create-dungeons-form').on('submit', onCreatePost)
//   $('#show-all-post-button').on('click', onShowPost)
//   $('#show-my-post-button').on('click', onShowMyPost)
//   $('#undo-delete-button').on('click', onUndoDeletePost)
//
//   $('#dungeons').on('click', '.delete-post-button', onDeletePost)
//   $('#dungeons').on('submit', '.update-post-form', onUpdatePost)
//
//   onShowPosts()
// }

module.exports = {
  onCreatePost,
  onUpdatePost,
  onDeletePost,
  onShowPost,
  onShowMyPost
}
