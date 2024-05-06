// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import JobList from './components/JobList';
import './styles/App.css';
import JobListings from './components/JobList';
// import FilterByExperience from './components/Filters';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <FilterByExperience/> */}
        <JobListings />
      </div>
    </Provider>
  );
}

export default App;
