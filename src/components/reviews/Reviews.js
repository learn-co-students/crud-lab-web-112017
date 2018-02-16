import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    let reviews;
    if (this.props.store.getState().reviews){
          reviews = this.props.store.getState().reviews.filter(review=>review.restaurantId === this.props.restaurantId).map(review => <Review key={review.id} restaurantId={this.props.restaurantId} review={review} store={this.props.store}/>)
    }
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
