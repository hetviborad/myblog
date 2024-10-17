import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ViewPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const foundPost = savedPosts.find(post => post.id === id);
    setPost(foundPost);
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="mt-3">
      <h2>{post.title}</h2>
      <p><em>Posted on: {post.date}</em></p>
      <p>{post.content}</p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
};

export default ViewPost;
