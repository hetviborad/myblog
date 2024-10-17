import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { id: uuidv4(), title, content, date: new Date().toLocaleDateString() };
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    localStorage.setItem('posts', JSON.stringify([...savedPosts, newPost]));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <h2>Create New Post</h2>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input 
          type="text" 
          className="form-control" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Content</label>
        <textarea 
          className="form-control" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          required 
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Post</button>
    </form>
  );
};

export default CreatePost;
