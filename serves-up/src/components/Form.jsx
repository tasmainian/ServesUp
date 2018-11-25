import React from 'react'
import Slider, { createSliderWithTooltip } from 'rc-slider';
import Datalist from './Datalist'
import Checkbox from './Checkbox'
import axios from 'axios'
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

  handleSubmit = (e) => {
    axios.get('https://tomalama.lib.id/servesup@dev', {
      params: {
        ll: this.state.ll,
        distance: this.state.distance
      }
    }).then((response) => {
      const o = response
      console.log(o);
    });
    e.preventDefault();
  };

  render() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({ 
          ll: position.coords.latitude + ',' + position.coords.longitude
        });
      });
    } else {
    }

    return (
      <form>
      <br />
      <br />
      <Datalist
        hasLabel='true'
        htmlFor='datalist'
        label='Diet Plan'
        options='Vegan, Vegetarian, Halal, Kosher, Pescatarian'
      />
        <br />
        <br />
        <h4> Restrictions </h4>
        <br />

        <Checkbox
          hasLabel='true'
          htmlFor='checkbox'
          label='Peanuts-Free'
        />
        <Checkbox
          hasLabel='true'
          htmlFor='checkbox'
          label='Dairy-Free'
        />
        <Checkbox
          hasLabel='true'
          htmlFor='checkbox'
          label='Gluten-Free'
        />
        <Checkbox
          hasLabel='true'
          htmlFor='checkbox'
          label='Low-Carbs'
        />
        <br />
        <br />
        <h4> Distance </h4>
        <div>
          <SliderWithTooltip
            tipFormatter={distanceFormatter}
            tipProps={{ overlayClassName: 'm' }}
            max={300}
            value={this.state.distance}
            onChange={this.handleChangeDistance}
          />
        </div>
        <br />

        <br />

        <br />
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}
