import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Slider, { Range } from 'rc-slider';

import 'rc-slider/assets/index.css';

export default class Form extends React.Component {

  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      diet: "",
      restrict: "",
      dist: "",
      loc: ""
    });
    this.props.onChange({
      diet: "",
      restrict: "",
      dist: "",
      loc: ""
    });
  };

  render() {
    return (
      <form>
      <br />
      <br />
        <select>
          <option value="" disabled selected>Diet Plan</option>
          <option value="vegan">Vegan</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="halal">Halal</option>
          <option value="kosher">Kosher</option>
          <option value="pescatarian">Pescatarian</option>
        </ select>
        <br />
        <br />
        <br />
        <select>
          <option value="" disabled selected>Allergies</option>
          <option value="vegan">Vegan</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="halal">Halal</option>
          <option value="kosher">Kosher</option>
          <option value="pescatarian">Pescatarian</option>
        </ select>
        <br />
        <br />
        <br />
        <br />
        <h4> Distance </h4>
        <div>
          <Slider />
        </div>
        <br />

        <br />

        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}
