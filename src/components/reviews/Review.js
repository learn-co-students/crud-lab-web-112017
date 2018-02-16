import React, { Component } from 'react';

class Review extends Component {

  handleClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      restaurantId: this.props.restaurantId,
      id: this.props.review.id
    })
  }
  render() {
    return (
      <li>
        {this.props.review.text}
        <button onClick={this.handleClick} restaurantId={this.props.restaurantId}>Delete Review</button>
      </li>
    );
  }
};

export default Review;
