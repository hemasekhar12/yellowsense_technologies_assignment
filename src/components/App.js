import React, { useState } from 'react';
import Jobs from './Jobs';
import Bookmarks from './Bookmarks';
import JobDetails from './JobDetails';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('jobs'); 
  const [selectedJob, setSelectedJob] = useState(null); 

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setActiveTab('details'); 
  };

  return (
    <div className="App">
      {activeTab === 'jobs' && <Jobs onJobClick={handleJobClick} />}
      {activeTab === 'bookmarks' && <Bookmarks onJobClick={handleJobClick} />}
      {activeTab === 'details' && <JobDetails job={selectedJob} onBack={() => setActiveTab('jobs')} />}
      
      <div className="bottom-navigation">
        <button onClick={() => setActiveTab('jobs')}>Jobs</button>
        <button onClick={() => setActiveTab('bookmarks')}>Bookmarks</button>
      </div>
    </div>
  );
}

export default App;

