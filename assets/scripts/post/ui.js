'use strict'

const updatePostTemplate = require('../templates/my-posts-update.handlebars')
const showPostsTemplate = require('../templates/posts.handlebars')
const showMyPostsTemplate = require('../templates/my-posts.handlebars')

const failure = () => {
  console.log('failure')
  $('#message').text('Something went wrong. Please try again')
}
const createPostSuccess = (response) => {
  console.log('createPostSuccess')
  store.dungeons = response.dungeons
  $('form').trigger('reset')
  $('#message').text('Dungeon created!')
}

// const showPostSuccess = (response) => {
//   console.log(response)
//   const showAllPosts =
// }

module.exports = {
  failure,
  createPostSuccess
  // showPostSuccess,
  // // showMyPostSuccess,
  // deletePostSuccess,
  // updatePostSuccess
}
