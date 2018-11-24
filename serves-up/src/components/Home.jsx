import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
    <div id="parent">
    <div class="sandbox sandbox-correct-pronounciation">
      <h1 class="heading heading-correct-pronounciation">
        <em>Serves Up</em>
        Let the restaurants find you.
      </h1>
    </div>
      <div>
        This is the DropdownButton
      </div>
      {/* <div class="container" id="app">
        <div class="add-product": class="{'open': formOpen}">
          <div class="button-copy" v-show="!formOpen" @click="formOpen = true">Add Product</div>
          <form @submit="cancel()">

            <div class="form--field">
              <label>Product Title *</label>
              <input type="text" class="form--element" name="title" v-model="productData.title" placeholder="Title" required="">
            </div>
            <div class="form--container -inline">
              <div class="form--field -short">
                <label>Product Rating *</label>
                <input type="number" class="form--element" name="rating" v-model="productData.rating" placeholder="Rating" required="" min="0" max="5" step="0.5">
              </div>
              <div class="form--field -short">
                <label>Product Price *</label>
                <span class="form--price">$</span>
                <input type="text" class="form--element" name="price" v-model="productData.price" placeholder="Price" required="" min="0" max="500" pattern="\d+(\.\d{2})?">
              </div>
              <div class="form--field -short">
                <label>List Price *</label>
                <span class="form--price">$</span>
                <input type="text" class="form--element" name="list_price" v-model="productData.list_price" placeholder="List Price" required="" min="0" max="500" pattern="\d+(\.\d{2})?">
              </div>
            </div>
            <div class="form--field">
              <label class="emoji">
                Is Featured
                <input type="checkbox" name="is_featured" v-bind="productData.is_featured">
                <span></span>
              </label>
              <p class="featured-note">If Is Featured is selected the product will appear in a large card.</p>
            </div>
            <div class="form--field">
              <label>Product Description</label>
              <textarea class="form--element textarea" v-model="productData.description" placeholder="Description">
              </textarea>
            </div>

            <button type="submit" class="submit-button">Add Product</button>
            <div class="cancel"><span @click="cancel()">Cancel</span></div>
          </form>
        </div>
      </div>*/}
    </div>
    )
  }
}
