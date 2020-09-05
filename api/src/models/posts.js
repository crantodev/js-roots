const fs = require('fs');

const location = __dirname + '/../db/posts.json'

exports.getAll = () => {
  return JSON.parse(fs.readFileSync(location));
}

exports.create = (post) => {
  const posts = JSON.parse(fs.readFileSync(location));
  posts.push(post);
  fs.writeFileSync(location, JSON.stringify(posts));

  return post;
}