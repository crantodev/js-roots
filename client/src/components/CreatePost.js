import React, { useState } from 'react';

import { createPost as createNewPost } from '../services/api';

function CreatePost({ reloadPosts }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onContentChange = (event) => {
    setContent(event.target.value);
  };

  const onClickHandler = async (event) => {
    event.preventDefault();

    await createNewPost({
      title,
      content,
    });

    reloadPosts(true);
  };

  return (
    <form>
      <label>Title</label>
      <br />
      <input type="text" value={title} onChange={onTitleChange} />
      <span>{title}</span>
      <br />
      <label>Content</label>
      <br />
      <textarea value={content} onChange={onContentChange} />
      <span>{content}</span>
      <br />
      <button type="submit" onClick={onClickHandler}>
        Save
      </button>
    </form>
  );
}

export default CreatePost;
