'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const api = require('./api')
const ui = require('./ui')

const onCreatePost = data => {
  console.log('onCreatePost')

  if (event.type === 'submit') {
    event.preventDefault()
    data = getFormFields(event.target)
  }

  api.createPost(data)
    .then(ui.createPostSuccess)
    .then(onShowMyPost)
    .catch(ui.failure)
}

const onUpdatePost = () => {
  console.log('onUpdatePost')
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = $(event.target).data('id')
  api.updatePost(data, id)
    .then(ui.updatePostSuccess(data, id))
    .catch(ui.failure)
}

const onDeletePost = () => {
  console.log('onDeletePost')
  event.preventDefault()
  const data = $(event.target).data('id')
  store.posts.push($(`#post-text-${data}`).text())
  api.deletePost(data)
    .then(ui.deletePostSuccess(data))
    .catch(ui.failure)
}

const onShowPost = () => {
  console.log('onShowPost')
  if (event) { event.preventDefault() }
  api.showPost()
    .then(ui.showPostSuccess)
    .catch(ui.failure)
}

const onShowMyPost = () => {
  console.log('onShowPost')
  if (event) { event.preventDefault() }
  api.showMyPost()
    .then(ui.showMyPostSuccess)
    .catch(ui.failure)
}

  $('#create-post-form').on('submit', onCreatePost)
  $('#show-my-post-button').on('click', onShowMyPost)
  $('#undo-delete-button').on('click', onUndoDeletePost)

  $('#posts').on('click', '.delete-post-button', onDeletePost)
  $('#posts').on('submit', '.update-post-form', onUpdatePost)

module.exports = {
  onCreatePost,
  onUpdatePost,
  onDeletePost,
  onDeletePost
}
