import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href=".">
          Checkout{" "}
          <span className={this.getEntriesClasses()}>
            {this.props.totalItems} Items
          </span>
          <span className={this.getEntriesClasses()}>
            {this.props.totalCounters} Entries
          </span>
        </a>
      </nav>
    );
  }

  getEntriesClasses = () => {
    let classes = "badge badge-pill badge-info mx-2";
    classes += this.props.totalCounters === 0 ? " d-none" : "";
    return classes;
  };
}

export default NavBar;
