// redux/actions/filterActions.js

import { SET_MIN_EXPERIENCE_FILTER } from './types';

export const setMinExperienceFilter = (minExperience) => ({
  type: SET_MIN_EXPERIENCE_FILTER,
  payload: minExperience
});
