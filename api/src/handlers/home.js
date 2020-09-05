const { v1 } = require('uuid');
const { getAll, create } = require('../models/posts');

exports.index = (request, response) => {
  const posts = getAll();
  return response.json(posts);
}

exports.doPost = (request, response) => {
  const { title, content } = request.body;
  const post = create({ id: v1(), title, content })
  return response.json(post);
}