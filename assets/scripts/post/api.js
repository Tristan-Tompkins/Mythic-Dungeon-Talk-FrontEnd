'use strict'

const config = require('../config')
const store = require('../store')

const createPost = data => {
  console.log('createPost')
  return $.ajax({
    url: config.apiUrl + '/posts',
    headers: {Authorization: `Token token=${store.user.token}`},
    method: 'POST',
    data: {
      'post': {
        'text': data.post.text
      }
    }
  })
}

const updatePost = (data, id) => {
  console.log('createPosts')
  return $.ajax({
    url: config.apiUrl + `/posts/${id}`,
    headers: {Authorization: `Token token=${store.user.token}`},
    method: 'PATCH',
    data: {
      'post': {
        'text': data.post.text
      }
    }
  })
}

const deletePost = data => {
  console.log('deletePosts')
  return $.ajax({
    url: config.apiUrl + `/posts/${data}`,
    headers: {Authorization: `Token token=${store.user.token}`},
    method: 'DELETE'
  })
}

const showMyPost = () => {
  console.log('showMyPosts')
  return $.ajax({
    url: config.apiUrl + `/users/${store.user.handle}`,
    method: 'GET'
  })
}

module.exports = {
  createPost,
  updatePost,
  deletePost,
  showMyPost
}
