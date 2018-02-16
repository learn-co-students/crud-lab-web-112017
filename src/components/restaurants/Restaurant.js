import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'
class Restaurant extends Component {

  handleDelete = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    })
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            {this.props.restaurant.text}
            <ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id}/>
            <button onClick={this.handleDelete}>Delete Me</button>
          </li>
        </ul>

      </div>
    );
  }
};

export default Restaurant;
