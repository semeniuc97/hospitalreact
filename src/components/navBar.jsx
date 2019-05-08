import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="Something">
          <span>
              {this.props.value}
          </span>
            Navbar
          </a>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
