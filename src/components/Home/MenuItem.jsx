import React from "react";
import "./MenuItem.css";

export default class MenuItem extends React.Component {
  render() {
    return (
      <div className="menu-item">
        <p className="menu-item__name">{this.props.itemName}</p>
        <p className="menu-item__restaurant">{this.props.restaurantName}</p>
        <p className="menu-item__calories">{this.props.calories + " Cal"}</p>
        <div className="menu-item__tags">
          {this.props.tags.map((tag, index) => (
            <p key={index} className="menu-item__tag">
              {tag}
            </p>
          ))}
        </div>
      </div>
    );
  }
}
