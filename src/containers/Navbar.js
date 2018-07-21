import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../images/warbler-logo.png";
import ReactLogo from "../logo.svg";
import "../css/navbar.css";


class Navbar extends Component {
  render() {
    return (
      < nav className = "navbar navbar-expand fixed-top" >
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              <img src={ReactLogo} alt="Warbler Home" />
                Small Town
            </Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/distance">Distance</Link>
            </li>
            <li>
              <Link to="/signin">Crime</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(Navbar);
