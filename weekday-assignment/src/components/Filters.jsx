// components/FilterByExperience.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMinExperienceFilter } from '../redux/actions/filterActions';

const FilterByExperience = () => {
  const minExperience = useSelector((state) => state.filters.minExperience);
  const dispatch = useDispatch();

  const handleMinExperienceChange = (e) => {
    dispatch(setMinExperienceFilter(e.target.value));
  };

  return (
    <div>
      <label htmlFor="minExperience">Minimum Experience:</label>
      <input
        type="number"
        id="minExperience"
        value={minExperience}
        onChange={handleMinExperienceChange}
      />
    </div>
  );
};

export default FilterByExperience;
