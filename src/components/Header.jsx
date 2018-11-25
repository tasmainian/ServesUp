import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Image, Button } from 'react-bootstrap';
import {bounce} from 'animate.css';
import './Home.css';

export default class Header extends Component {
  render() {
    return (
    <div id="parent">
    <div className="sandbox sandbox-correct-pronounciation">
      <h1 className="heading heading-correct-pronounciation">

        <em className="animated fadeIn delay-1s">Serves Up</em>
        <br />
          <span>Let the restaurants find you.</span>
      </h1>
    </div>
    </div>
    )
  }
}
