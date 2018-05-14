import axios from 'axios';
import { FETCH_USER, FETCH_STACKS, FETCH_STACK } from './types';

export const fetchUser = () => async (dispatch) => {
  // if an action creator returns a function instead of an action
  // redux-thunk will automatically call the return function
  // and pass in the /dispatch/ function as an argument
  const res = await axios.get('/api/current_user')
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitStack = (values, history) => async dispatch => {
  const res = await axios.post('/api/stacks', values);

  history.push('/stacks')
  dispatch({ type: FETCH_USER, payload: res.data });
}

export const fetchStacks = () => async dispatch => {
  const res = await axios.get('/api/stacks');

  dispatch({ type: FETCH_STACKS, payload: res.data });
}

export const fetchStack = (id) => async dispatch => {
  console.log(id);
  const res = await axios.get(`/api/stack/${id}`);

  dispatch({ type: FETCH_STACK, payload: res.data });
}
