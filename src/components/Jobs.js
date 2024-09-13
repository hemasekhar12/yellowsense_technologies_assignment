
import React, { useState, useEffect, useRef, useCallback } from 'react';
import JobCard from './JobCard';
import { fetchJobsFromAPI } from '../api';
import './Jobs.css';

function Jobs({ onJobClick }) {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const observer = useRef();

  const lastJobElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading]
  );

  useEffect(() => {
    fetchJobs();
  }, [page]);

  const fetchJobs = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchJobsFromAPI(page);
      setJobs((prevJobs) => [...prevJobs, ...data.results]);
    } catch (err) {
      setError('Failed to fetch jobs.');
    } finally {
      setIsLoading(false);
    }
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="jobs-container">
      {jobs.length === 0 && !isLoading && <p>No jobs available.</p>}
      {jobs.map((job, index) => {
        if (jobs.length === index + 1) {
          return <JobCard ref={lastJobElementRef} key={job.id} job={job} onJobClick={onJobClick} />;
        } else {
          return <JobCard key={job.id} job={job} onJobClick={onJobClick} />;
        }
      })}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}

export default Jobs;
