import { FETCH_STACKS } from '../actions/types';


export default function(state = [], action) {
  switch (action.type) {
    case FETCH_STACKS:
      return action.payload;
    default:
      return state;
  }
}
