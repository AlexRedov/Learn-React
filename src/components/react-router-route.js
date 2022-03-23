import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const BlogPosts = () => <div>BlogPosts</div>;

class ReactRouterRoute extends React.Component {
  render() {
    return (
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog-posts">BlogPosts</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog-posts" element={<BlogPosts/>} />
        </Routes>
      </Router>
    );
  }
}

export default ReactRouterRoute;