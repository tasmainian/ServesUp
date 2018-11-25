import React from 'react';
import './menu-item.scss';
import {bounce} from 'animate.css';

export default class MenuItem extends React.Component {

    render() {
        return (
          <div>
            <div className="menu-item animated slideInRight delay-1s">
                <h6>Menu Item</h6>
                <h2 className="menu-item__name">{this.props.itemName}</h2>
            </div>
            <div className="restaurants animated slideInRight delay-2s">
                <h6>Restaurant</h6>
                <h5 className="menu-item__restaurant">{this.props.restaurantName}</h5>
            </div>
            <div className="calories animated slideInRight delay-3s">
                <h6>Calories</h6>
                <h5 className="menu-item__calories">{this.props.calories + ' Cal'}</h5>
            </div>
            <div className="tags animated slideInRight delay-4s">
                <h6>Tags</h6>
                <div className="menu-item__tags">
                    {this.props.tags.map((tag, index) => <h5 key={index} className="menu-item__tag">{tag}</h5>)}
                </div>
            </div>
                <br />
                <br />
            </div>
        );
    }
}
