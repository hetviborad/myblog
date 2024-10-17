import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import ViewPost from './pages/ViewPost';

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <h1 className="text-center">My Blog</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/post/:id" element={<ViewPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
