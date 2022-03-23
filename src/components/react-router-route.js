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
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog-posts" component={BlogPosts} />
        </Routes>
      </Router>
    );
  }
}

export default ReactRouterRoute;