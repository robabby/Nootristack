import { FETCH_STACK } from '../actions/types';


export default function(state = [], action) {
  switch (action.type) {
    case FETCH_STACK:
      return action.payload;
    default:
      return state;
  }
}
