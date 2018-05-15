import { FETCH_STACKS, DELETE_STACK } from '../actions/types';


export default function(state = [], action) {
  switch (action.type) {
    case FETCH_STACKS:
      return action.payload;
    case DELETE_STACK:
      return action.payload;
    default:
      return state;
  }
}
