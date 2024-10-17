import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const post = savedPosts.find(post => post.id === id);
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const updatedPosts = savedPosts.map(post => 
      post.id === id ? { ...post, title, content } : post
    );
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <h2>Edit Post</h2>
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
      <button type="submit" className="btn btn-warning">Update Post</button>
    </form>
  );
};

export default EditPost;
