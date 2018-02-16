import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: this.state.text
      },
      restaurantId: this.props.restaurantId
    })
  }

  render() {
    console.log('my props', this.props)
    return (
      <div>
        Review Input
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange}></input>
          <input type='submit'></input>
        </form>
        <Reviews store={this.props.store} restaurantId={this.props.restaurantId}/>
      </div>
    );
  }
};

export default ReviewInput;
