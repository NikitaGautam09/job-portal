import { FETCH_JOB_LISTINGS_SUCCESS } from './types';

export const fetchJobListingsSuccess = (jobListings) => ({
  type: FETCH_JOB_LISTINGS_SUCCESS,
  payload: jobListings,
});

export const fetchJobListings = ({ limit, offset }) => { // Accept limit and offset as parameters
  return async (dispatch) => {
    try {
      const response = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          limit, // Use provided limit
          offset // Use provided offset
        })
      });
      const data = await response.json();
      dispatch(fetchJobListingsSuccess(data.jdList)); // Dispatch the action with fetched data
    } catch (error) {
      console.error('Error fetching job listings:', error);
      // You can dispatch an error action here if needed
    }
  };
};
