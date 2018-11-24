import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import Datalist from "./Datalist"
import Checkbox from "./Checkbox"
import 'rc-slider/assets/index.css';

function distanceFormatter(v) {
  return `${v} m`;
}

const SliderWithTooltip = createSliderWithTooltip(Slider);

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
        <h4> Restrictions </h4>
        <br />

        <Checkbox
          hasLabel='true'
          htmlFor='checkbox'
          label='Peanuts-Free'
          required='true'
        />
        <Checkbox
          hasLabel='true'
          htmlFor='checkbox'
          label='Dairy-Free'
          required='true'
        />
        <Checkbox
          hasLabel='true'
          htmlFor='checkbox'
          label='Gluten-Free'
          required='true'
        />
        <Checkbox
          hasLabel='true'
          htmlFor='checkbox'
          label='Low-Carbs'
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
