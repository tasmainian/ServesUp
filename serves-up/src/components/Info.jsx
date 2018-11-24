import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Image, Button } from 'react-bootstrap';


export default class Info extends Component {
  render() {
    return (
    <div class="about">
      <div class="skewed-bg">
      	<div class="content">
      		<h1 class="title">Skewed background with CSS</h1>
           <p class="text">This is a quick example to show @AlbertGlezRoges how to get skewed backgrounds with plain HTML & CSS.</p>
      	</div>
      </div>

      <footer class="footer">
      	<p class="credits">
          Pen by Jose L Pimienta
          <a class="link" href="https://twitter.com/pipozoft">@pipozoft</a>
        </p>
      </footer>
    </div>
    )
  }
}
