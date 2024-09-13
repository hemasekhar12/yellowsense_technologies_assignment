import React from 'react';
import './JobCard.css';

function JobCard({ job, onJobClick }) {
  const addBookmark = () => {
    const currentBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const updatedBookmarks = [...currentBookmarks, job];
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    alert('Job bookmarked!');
  };

  return (
    <div className="job-card" onClick={() => onJobClick(job)}>
      <h3>{job.title}</h3>
      <p><strong>Location:</strong> {job.primary_details?.Place || 'N/A'}</p> 
      <p><strong>Salary:</strong> {job.primary_details?.Salary || 'N/A'}</p>
      <p><strong>Contact:</strong> {job.whatsapp_no || 'N/A'}</p>
      <div className="job-tags">
        {/* Check if job.job_tags is defined and is an array before mapping */}
        {Array.isArray(job.job_tags) && job.job_tags.length > 0 ? (
          job.job_tags.map((tag, index) => (
            <span key={index} className="job-tag" style={{ backgroundColor: tag.bg_color, color: tag.text_color }}>
              {tag.value}
            </span>
          ))
        ) : (
          <p>No tags available</p>  
        )}
      </div>
      <button onClick={(e) => { e.stopPropagation(); addBookmark(); }}>Bookmark</button>
    </div>
  );
}

export default JobCard;
