// redux/store.js
import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // Importing thunk from 'redux-thunk' package
import jobReducer from './reducers/jobReducer';

const initialState = {};

const store = createStore(
  jobReducer,
  initialState,
  applyMiddleware(thunk) // Applying thunk middleware directly
);

export default store;
