const { response } = require('express');

const { getAll, create } = require('../models/posts');

exports.index = (request, response) => {
  const posts = getAll();
  return response.json(posts);
}

exports.doPost = (request, response) => {
  const { title, description } = request.body;
  const id = 3;
  const post = create({ id, title, description })
  return response.json(post);
}