'use strict'

const updatePostTemplate = require('../template/my-post-update.handlebars')
const showPostsTemplate = require('../template/posts.handlebars')
const showMyPostsTemplate = require('../template/my-posts.handlebars')

const failure = () => {
  console.log('failure')
  $('#message').text('Something went wrong. Please try again')
}
const createPostSuccess = responseData => {
  console.log('createPostSuccess')
  $('form').trigger('reset')
  $(`#post`).append(updatePostTemplate(responseData))
}

const showPostSuccess = responseData => {
  console.log('showPostSuccess')
  $('#posts').empty()
  $('#posts').append(showPostsTemplate({posts: responseData.posts}))
  $('#posts-header-text').text('All Posts')
}

const showMyPostSuccess = responseData => {
  console.log('showMyPostSuccess')
  $('#posts').empty()
  $('#posts').append(showMyPostsTemplate({posts: responseData.user.posts}))
  $('#posts-header-text').text('My Posts')
}

const deletePostSuccess = (id) => {
  console.log('deletePostSuccess')
  $(`#posts-${id}`).empty()
  $('#undo-delete-button').show()
}

const updatePostSuccess = (data, id) => {
  console.log('updatePostSuccess')
  const post = {post: {text: data.post.text, id: id}}
  $(`#posts-${id}`).replaceWith(updatePostTemplate(post))
  $('form').trigger('reset')
}

module.exports = {
  failure,
  createPostSuccess,
  showPostSuccess,
  showMyPostSuccess,
  deletePostSuccess,
  updatePostSuccess
}
