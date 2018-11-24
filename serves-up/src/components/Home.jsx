import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';
import Header from "./Header";
import Form from "./Form"


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
