// Libraries
import React from "react";
import axios from "axios";

// Components
import Checkbox from "./Checkbox";
import MenuItem from "../Home/MenuItem";

// CSS
import { StickyContainer, Sticky } from "react-sticky";
import Slider, { createSliderWithTooltip } from "rc-slider";
import "rc-slider/assets/index.css";
import "./Form.css";

function distanceFormatter(v) {
  return `${v} m`;
}

const SliderWithTooltip = createSliderWithTooltip(Slider);

export default class Form extends React.Component {
  state = {
    diet: undefined,
    restrictions: [],
    distance: 0,
    menuItems: []
  };

  handleChangeDistance = e => {
    this.setState({ distance: e });
  };

  handleCheckbox = e => {
    if (e.checked) {
      this.setState(prevState => ({
        restrictions: [...prevState.restrictions, e.label]
      }));
    } else {
      this.setState(prevState => ({
        restrictions: prevState.restrictions.filter(
          element => element !== e.label
        )
      }));
    }
  };

  handleSubmit = e => {
    axios
      .get("https://tomalama.lib.id/servesup@dev", {
        params: {
          ll: this.state.ll,
          distance: this.state.distance
        }
      })
      .then(response => {
        this.setState({ menuItems: response.data });
      });
    e.preventDefault();
  };

  render() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          ll: position.coords.latitude + "," + position.coords.longitude
        });
      });
    }

    const childElements = this.state.menuItems.map((menuItem, index) => {
      if (this.state.restrictions.includes("Low Carb")) {
        if (
          menuItem.nf_total_carbohydrate / menuItem.serving_weight_grams >
          0.05
        ) {
          return;
        }
      }

      if (this.state.restrictions.includes("Low Fat")) {
        if (!menuItem.claims.includes("Low Fat")) {
          return;
        }
      }

      if (this.state.restrictions.includes("High Protein")) {
        if (!menuItem.claims.includes("High Protein")) {
          return;
        }
      }

      if (this.state.restrictions.includes("Low Calorie")) {
        if (!menuItem.claims.includes("Low Calorie")) {
          return;
        }
      }

      return (
        <MenuItem
          key={index}
          itemName={menuItem.food_name}
          restaurantName={menuItem.brand_name}
          calories={menuItem.nf_calories}
          tags={menuItem.claims}
        />
      );
    });

    return (
      <StickyContainer>
        <Sticky bottomOffset={60} disableCompensation={true}>
          {({ style }) => (
            <div className="side-bar" style={style}>
              <h4>Restrictions</h4>
              <Checkbox
                hasLabel="true"
                htmlFor="Low Carb"
                label="Low Carb"
                onChange={this.handleCheckbox}
              />
              <Checkbox
                hasLabel="true"
                htmlFor="Low Fat"
                label="Low Fat"
                onChange={this.handleCheckbox}
              />
              <Checkbox
                hasLabel="true"
                htmlFor="High Protein"
                label="High Protein"
                onChange={this.handleCheckbox}
              />
              <Checkbox
                hasLabel="true"
                htmlFor="Low Calorie"
                label="Low Calorie"
                onChange={this.handleCheckbox}
              />
              <h4>Distance</h4>
              <SliderWithTooltip
                tipFormatter={distanceFormatter}
                tipProps={{ overlayClassName: "m" }}
                max={500}
                value={this.state.distance}
                onChange={this.handleChangeDistance}
              />
              <div className="button-wrapper">
                <button onClick={this.handleSubmit}>Submit</button>
              </div>
            </div>
          )}
        </Sticky>
        <div className="menu-item-container">{childElements}</div>
      </StickyContainer>
    );
  }
}
