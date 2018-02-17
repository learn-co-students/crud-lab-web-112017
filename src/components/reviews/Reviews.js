import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  handleReviews = () => {
    let reviews = this.props.store.getState().reviews.filter(review => {
      return review.restaurantId === this.props.restaurantId
    })

    return reviews.map((review, index) => {
      return <Review store={this.props.store} key={index} review={review}/>
    })
  }

  render() {
    return (
      <ul>
        {this.handleReviews()}
      </ul>
    );
  }
};

export default Reviews;
