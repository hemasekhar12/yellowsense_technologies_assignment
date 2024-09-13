import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import './Bookmarks.css';

function Bookmarks({ onJobClick }) {
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarkedJobs(storedJobs);
  }, []);

  return (
    <div className="bookmarks-container">
      {bookmarkedJobs.length === 0 ? (
        <p>No jobs bookmarked yet.</p>
      ) : (
        bookmarkedJobs.map((job) => <JobCard job={job} key={job.id} onJobClick={onJobClick} />)
      )}
    </div>
  );
}

export default Bookmarks;
