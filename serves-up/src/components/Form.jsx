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
        <select>
          <option value="" disabled selected>Diet Plan</option>
          <option value="vegan">Vegan</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="halal">Halal</option>
          <option value="kosher">Kosher</option>
          <option value="pescatarian">Pescatarian</option>
        </ select>
        <br />
        <input
          name="lastName"
          placeholder="Last name"
          value={this.state.lastName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={e => this.change(e)}
        />
        <br />
        <div>
          <Slider />
        </div>
        <input
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}
