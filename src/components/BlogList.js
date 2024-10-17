import React from 'react';
import BlogPost from './BlogPost';

const BlogList = ({ posts, setPosts }) => {
  const handleDelete = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <div className="list-group">
      {posts.map(post => (
        <BlogPost key={post.id} post={post} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default BlogList;
