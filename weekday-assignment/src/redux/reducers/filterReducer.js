// redux/reducers/filterReducer.js

import { SET_MIN_EXPERIENCE_FILTER } from '../actions/types';

const initialState = {
  minExperience: ''
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MIN_EXPERIENCE_FILTER:
      return {
        ...state,
        minExperience: action.payload
      };
    default:
      return state;
  }
};

export default filterReducer;
