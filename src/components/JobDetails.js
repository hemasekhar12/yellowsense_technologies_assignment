import React from 'react';
import './JobDetails.css';

function JobDetails({ job, onBack }) {
  if (!job) return null; 

  const content = JSON.parse(job.content);

  return (
    <div className="job-details">
      <button onClick={onBack} className="back-button">Back</button>
      <h2>{job.title}</h2>
      <p><strong>Place:</strong> {job.primary_details?.Place || 'N/A'}</p>
      <p><strong>Salary:</strong> {job.primary_details?.Salary || 'N/A'}</p>
      <p><strong>Experience:</strong> {job.primary_details?.Experience || 'N/A'}</p>
      <p><strong>Description:</strong> {content.block1 || 'No description available.'}</p>
    </div>
  );
}

export default JobDetails;

