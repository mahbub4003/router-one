import React, { Component } from "react";
import Auth from "../Auth";
import { Redirect } from "react-router-dom";

class Logout extends Component {
  state = {
    redirect: false,
  };

  componentDidMount() {
    Auth.logout(() => {
      this.setState({ redirect: true });
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else {
      <h1>Login Out......</h1>;
    }
  }
}

export default Logout;
