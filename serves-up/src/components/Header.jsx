import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Header extends Component {
  render() {
    return (
    <div id="parent">
    <div class="sandbox sandbox-correct-pronounciation">
      <h1 class="heading heading-correct-pronounciation">
        <em>Serves Up</em>
        Let the restaurants find you.
      </h1>
    </div>

    </div>
    )
  }
}
