
import cuid from 'cuid';
export const cuidFn = cuid;

const initalState = {
  restaurants: [],
  reviews: [],
}

export default function manageRestaurants(state=initalState, action) {
  let restaurants;
  let reviews;

  switch (action.type) {
    case "ADD_RESTAURANT":
      let restaurant = {text: action.text, id: cuid()}
      restaurants = state.restaurants.concat(restaurant)
      return { ...state, restaurants }

    case "DELETE_RESTAURANT":
      restaurants = state.restaurants.filter(restaurant => {
        return restaurant.id !== action.id
      })
      return { ...state, restaurants }

    case "ADD_REVIEW":
      let review = {text: action.text, restaurantId: action.restaurantId, id: cuid()}
      reviews = state.reviews.concat(review)
      return { ...state, reviews }

    case "DELETE_REVIEW":
      reviews = state.reviews.filter(review => {
        return review.id !== action.id
      })

      return { ...state, reviews }
    default:
      return state
  }
}
