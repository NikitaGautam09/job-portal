// components/JobListings.js

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobListings } from '../redux/actions/jobActions';
import './JobListings.css'; // Import CSS file

const JobListings = () => {
  const dispatch = useDispatch();
  const jobListings = useSelector((state) => state.jobListings) ?? []; // Provide a default value for jobListings

  const [searchTerm, setSearchTerm] = useState('');
  const [limit, setLimit] = useState(50); // Initial limit
  const [offset, setOffset] = useState(0); // Initial offset

  useEffect(() => {
    dispatch(fetchJobListings({ limit, offset })); // Fetch initial data
  }, [dispatch, limit, offset]);

  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 50) {
      return words.slice(0, 30).join(' ') + '...';
    }
    return description;
  };

  // Filter job listings based on search term
  const filteredJobListings = jobListings.filter(job => {
    const search = searchTerm.toLowerCase();
    return (
      job?.jobRole?.toLowerCase().includes(search) ||
      job?.companyName?.toLowerCase().includes(search) ||
      job?.location?.toLowerCase().includes(search) ||
      job?.remote?.toLowerCase().includes(search) ||
      job?.techStack?.toLowerCase().includes(search) ||
      job?.role?.toLowerCase().includes(search) ||
      (job?.minJdSalary?.toString()?.includes(search)) // Convert minJdSalary to string before checking
    );
  });

  // Function to handle scrolling
  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) >=
      document.documentElement.scrollHeight;

    if (bottom) {
      // Load more data when scrolled to the bottom
      setOffset(offset + limit);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset, limit]); // Include offset and limit in dependency array to re-register event listener when they change

  return (
    <div>
      <div className="filter-container">
        <input
          type="text"
          placeholder="Search by job role, company name, location, etc."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="job-listings-container">
        {filteredJobListings.map((job) => (
          <div key={job.jdUid} className="job-card">
            <img src={job.logoUrl} alt={`${job.companyName} Logo`} />
            <h2>{job.jobRole}</h2>
            <p style={{fontSize:"13px"}}>Company: {job.companyName}</p>
            <p style={{fontSize:"13px"}}>Location: {job.location}</p>
            <p style={{fontSize:"13px"}}>Salary: {job.minJdSalary && job.maxJdSalary ? `${job.minJdSalary} - ${job.maxJdSalary} ${job.salaryCurrencyCode}` : 'Not specified'}</p>
            <p style={{fontSize:"13px"}}>Experience: {job.minExp && job.maxExp ? `${job.minExp} - ${job.maxExp} years` : 'Not specified'}</p>
            <p style={{fontSize:"13px"}}>Description: {truncateDescription(job.jobDetailsFromCompany)}</p>
            {job.jobDetailsFromCompany.split(' ').length > 50 && (
              <button onClick={() => window.open(job.jdLink, '_blank')} className="view-job-button">View Job</button>
            )}
            <a href={job.jdLink} target="_blank" rel="noopener noreferrer"> Easy Apply</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListings;
