import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="center">
          <h1 className="animated fadeIn delay-1s">Serves Up</h1>
          <h2>Let the restaurants find you.</h2>
        </div>
      </div>
    );
  }
}
