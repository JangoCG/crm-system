// This file decides what will happen with
// with the state after a action
import { ADD_LEAD, GET_LEADS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        firstName: action.payload
      };
    case ADD_LEAD:
      console.log('add lead wurde getriggert');
      console.log(action.payload);
      return {
        ...state,
        // copy whats inside the leads array and then append the payload
        firstName: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};
