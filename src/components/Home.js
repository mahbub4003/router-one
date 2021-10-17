import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>I am Home </h1>
        <Link to="/posts/post-1">Post One</Link>
        <Link to="/posts/post-2">Post Tow</Link>
        <Link to="/posts/post-3">Post Three</Link>
      </div>
    );
  }
}

export default Home;
