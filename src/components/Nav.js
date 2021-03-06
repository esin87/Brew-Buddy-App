import React, { Component } from "react";
import { Link } from "react-router-dom";


class Nav extends Component {
  //used Link to make them functional
  render() {
    return (
      <nav className="container">
        <h2>Brew-Buddy</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mylist">My list</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
