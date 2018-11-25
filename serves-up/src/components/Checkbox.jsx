import React, { Component } from 'react'
import ReactDOM from 'react-dom';

// Create component for label
class Label extends React.Component {
  render() {
    if (this.props.hasLabel === 'true') {
      return <label htmlFor={this.props.htmlFor}>{this.props.label}</label>
    }
  }
}

// Create component for checkbox input
export default class Checkbox extends React.Component {

  state = {
    checked: false
  }

  handleToggle = () => {
    this.setState({ checked: !this.state.checked })
    this.props.onChange({ 
      checked: !this.state.checked,
      label: this.props.label
    });
  }

  render() {
    return (
      <fieldset>
        <label
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        >
          <input
            id={this.props.htmlFor}
            name={this.props.name || null}
            required={this.props.required || null}
            type='checkbox'
            onChange={this.handleToggle}
          />
          {this.props.label}
        </label>
      </fieldset>
    );
  }
}
