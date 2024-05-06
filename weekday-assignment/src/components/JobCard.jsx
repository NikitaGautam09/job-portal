// components/JobCard.js
import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h2>{job.jobRole}</h2>
      <p>Company: {job.companyName}</p>
      <p>Location: {job.location}</p>
      <p>Salary: {job.minJdSalary && job.maxJdSalary ? `${job.minJdSalary} - ${job.maxJdSalary} ${job.salaryCurrencyCode}` : 'Not specified'}</p>
      <p>Experience: {job.minExp && job.maxExp ? `${job.minExp} - ${job.maxExp} years` : 'Not specified'}</p>
      <p>Description: {job.jobDetailsFromCompany}</p>
      <img src={job.logoUrl} alt={`${job.companyName} Logo`} />
      <a href={job.jdLink} target="_blank" rel="noopener noreferrer">Apply</a>
    </div>
  );
};

export default JobCard;
