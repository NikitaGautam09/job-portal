// redux/reducers/jobReducer.js
import { FETCH_JOB_LISTINGS_SUCCESS } from '../actions/types';

const initialState = {
  jobListings: [],
  totalCount: 0
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOB_LISTINGS_SUCCESS:
      return {
        ...state,
        jobListings: action.payload,
        totalCount: action.payload.length // Assuming totalCount is the total count of fetched job listings
      };
    default:
      return state;
  }
};

export default jobReducer;
