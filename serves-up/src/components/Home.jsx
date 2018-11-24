import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Image, Button } from 'react-bootstrap';
import Header from "./Header";
import Form from "./Form"
import Info from "./Info"


export default class Home extends Component {

  render() {
    return (
    <div id="parent">
      <Header />
      <Form />
    </div>
    )
  }
}
