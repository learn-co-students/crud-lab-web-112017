import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  handleRestaurants = () => {
    return this.props.store.getState().restaurants.map((restaurant, index) => {
      return <Restaurant store={this.props.store} key={index} restaurant={restaurant}/>
    })
  }

  render() {
    return(
      <ul>
        {this.handleRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;
