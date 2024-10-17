import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({ post, onDelete }) => {
  return (
    <div className="list-group-item">
      <h5>{post.title}</h5>
      <p>{post.content.substring(0, 100)}...</p>
      <Link to={`/post/${post.id}`} className="btn btn-info me-2">View</Link>
      <Link to={`/edit/${post.id}`} className="btn btn-warning me-2">Edit</Link>
      <button className="btn btn-danger" onClick={() => onDelete(post.id)}>Delete</button>
    </div>
  );
};

export default BlogPost;
