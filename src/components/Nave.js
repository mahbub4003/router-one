import React, { Component } from "react";
import { NavLink } from "../../node_modules/react-router-dom";
import Auth from "../Auth";

const style = {
  color: "black",
  fontWeight: "bold",
};

class Nave extends Component {
  render() {
    return (
      <div>
        <NavLink exact activeStyle={style} to="/" Component="Home">
          {" "}
          Home{" "}
        </NavLink>
        <NavLink exact activeStyle={style} to="/about" Component="About">
          {" "}
          About{" "}
        </NavLink>
        <NavLink exact activeStyle={style} to="/contact" Component="Contact">
          Contact
        </NavLink>
        {Auth.isLogin && <NavLink to="/logout">Logout</NavLink>}
      </div>
    );
  }
}

export default Nave;
