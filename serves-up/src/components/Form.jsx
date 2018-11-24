import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Slider, { Range } from 'rc-slider';
import Datalist from "./Datalist"
import 'rc-slider/assets/index.css';

export default class Form extends React.Component {
  render() {
    return (
      <form>
      <br />
      <br />
      <Datalist
        hasLabel='true'
        htmlFor='datalist'
        label='Diet Plan'
        options='Vegan, Vegetarian, Halal, Kosher, Pescetarian'
        required='true'
      />
        <br />
        <br />
        <Datalist
          hasLabel='true'
          htmlFor='datalist'
          label='Restrictions'
          options='Peanuts, Pork, Dairy, Gluten, Carbs'
          required='true'
        />
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
