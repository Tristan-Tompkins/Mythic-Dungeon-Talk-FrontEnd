'use strict'

const updatePostTemplate = require('../templates/my-posts-update.handlebars')
const showPostsTemplate = require('../templates/posts.handlebars')
const showMyPostsTemplate = require('../templates/my-posts.handlebars')

const failure = (error) => {
  //console.log('failure')
  $('#message').text('Something went wrong. Please try again')
}
const createPostSuccess = (data) => {
  //console.log('createPostSuccess')
  $('form').trigger('reset')
  $('#message').text('Dungeon created!')
}

const showPostSuccess = data => {
  $('#dungeons').empty()
  $('#dungeons').append(showPostsTemplate({posts: data.dungeons}))
  $('#dungeons-header-text').text('All Dungeons Routes')
  $('.auth').show()
}

const showMyPostSuccess = data => {
  $('#dungeons').empty()
  $('#dungeons').append(showMyPostsTemplate({posts: data.dungeons}))
  $('#dungeons-header-text').text('My Dungeons')
  $('.auth').show()
}

const deletePostSuccess = (id) => {
  //console.log('deletePostSuccess')
  $(`#dungeon-${id}`).empty()
  $('#message').text('Dungeon deleted!')
}

const updatePostSuccess = (data, id) => {
  //console.log('updatePostSuccess')
  $(`#dungeon-${id}`).replaceWith(updatePostTemplate(post))
  $('form').trigger('reset')
  $('#message').text('Dungeon updated!')
}
module.exports = {
  failure,
  createPostSuccess,
  showPostSuccess,
  showMyPostSuccess,
  deletePostSuccess,
  updatePostSuccess
}
