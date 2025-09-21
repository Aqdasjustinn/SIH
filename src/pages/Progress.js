import React from 'react';

const Progress = () => {
  return (
    <div className="dashboard">
      <h1 className="section-title">My Progress</h1>
      
      <div className="progress-section">
        <h2>Learning Progress Overview</h2>
        <div className="progress-stats">
          <div className="stat-item">
            <div className="stat-value">75%</div>
            <div className="stat-label">Overall Progress</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">12</div>
            <div className="stat-label">Courses Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">24h</div>
            <div className="stat-label">Learning Time</div>
          </div>
        </div>
      </div>

      <div className="progress-section">
        <h2>Subject-wise Progress</h2>
        <div className="subject-progress">
          <div className="subject-item">
            <span className="subject-name">Mathematics</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '75%'}}></div>
            </div>
            <span className="progress-percentage">75%</span>
          </div>
          <div className="subject-item">
            <span className="subject-name">English</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '60%'}}></div>
            </div>
            <span className="progress-percentage">60%</span>
          </div>
          <div className="subject-item">
            <span className="subject-name">Science</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '45%'}}></div>
            </div>
            <span className="progress-percentage">45%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;