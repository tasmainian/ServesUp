import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import Datalist from "./Datalist"
import 'rc-slider/assets/index.css';

function distanceFormatter(v) {
  return `${v} m`;
}

const SliderWithTooltip = createSliderWithTooltip(Slider);

export default class Form extends React.Component {

  state = {
    diet: undefined,
    restrictions: [],
    distance: 0
  };

  handleChangeDistance = (e) => {
    this.setState({ distance: e });
  };

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
          htmlFor='datalist2'
          label='Restrictions'
          options='Peanuts, Pork, Dairy-Free, Gluten, Carbs'
          required='true'
        />
        <br />
        <br />
        <h4> Distance </h4>
        <div>
          <SliderWithTooltip
            tipFormatter={distanceFormatter}
            tipProps={{ overlayClassName: 'm' }}
            max={500}
            value={this.state.distance}
            onChange={this.handleChangeDistance}
          />
        </div>
        <br />

        <br />

        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}
