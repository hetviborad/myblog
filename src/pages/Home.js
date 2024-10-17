import React, { useState, useEffect } from 'react';
import BlogList from '../components/BlogList';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(savedPosts);
  }, []);

  return (
    <div>
      <Link to="/create" className="btn btn-primary mb-3">Create New Post</Link>
      <BlogList posts={posts} setPosts={setPosts} />
    </div>
  );
};

export default Home;
