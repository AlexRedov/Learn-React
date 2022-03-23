import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
  Redirect,
} from 'react-router-dom';
import './style.css';
import ShowLocationInfoWithRouter from './nav-info';

const Home = () => <div>Home</div>;
const About = () => (
  <div>
    About
    <ShowLocationInfoWithRouter />
  </div>
);

const Post = () => <div>Post</div>;

const BlogPosts = props => (
  <div>
    BlogPosts
    <Route path={`${props.match.url}/post`} component={Post} />
  </div>
);

const NotFound = () => <div>404</div>;

class Routing extends React.Component {
  render() {
    return (
      <Router>
        <ul>
          <li>
            <NavLink to="/" isActive={() => true}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="is-active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog-posts" activeStyle={{ color: 'green' }}>
              BlogPosts
            </NavLink>
          </li>
        </ul>

        <Switch>
          <Route path="/" exact element={<Home/>} />
          <Redirect from="/about" to="blog-posts"/>
          <Route path="/about" element={<About/>} />
          <Route path="/blog-posts" element={<BlogPosts/>} />
          <Route path="*" element={<NotFound/>} />
        </Switch>
      </Router>
    );
  }
}

export default Routing;