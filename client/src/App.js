import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './components/Post';
import CreatePost from './components/CreatePost';
import { getPosts } from './services/api';

function App() {
  const [posts, setPosts] = useState([]);
  const [shouldLoadPosts, setShouldLoadPosts] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
      setShouldLoadPosts(false);
    };

    if (shouldLoadPosts) {
      fetchPosts();
    }
  }, [shouldLoadPosts, posts]);

  return (
    <div className="container">
      <h1>My posts</h1>
      <CreatePost reloadPosts={setShouldLoadPosts} />
      {posts.map((post) => (
        <Post key={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
}

export default App;
