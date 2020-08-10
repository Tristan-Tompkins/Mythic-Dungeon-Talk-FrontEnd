'use strict'

const config = require('../config')
const store = require('../store')

const createPost = formData => {
  return $.ajax({
    url: config.apiUrl + '/dungeons',
    method: 'POST',
    data: formData,
    headers: {
        Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updatePost = function (id, formData) {
  console.log(id, formData)
  return $.ajax({
    url: config.apiUrl + '/dungeons/' + id,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const deletePost = (dungeonId) => {
  return $.ajax({
    url: config.apiUrl + '/dungeons/' + dungeonId,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const showMyPost = function () {
    return $.ajax({
      url: config.apiUrl + '/dungeons',
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + store.user.token
      }
    })
  }

module.exports = {
  createPost,
  updatePost,
  deletePost,
  showMyPost
}
