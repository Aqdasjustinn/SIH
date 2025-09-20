import React from 'react';
import StatCard from '../components/StatCard';

const Statistics = () => {
  const stats = [
    { value: '24h', label: 'Total Learning Time', color: '#7E57C2' },
    { value: '87%', label: 'Average Score', color: '#26A69A' },
    { value: '12', label: 'Courses Completed', color: '#FF7043' },
    { value: '45', label: 'Skills Learned', color: '#66BB6A' }
  ];

  return (
    <div className="dashboard">
      <h1 className="section-title">Learning Statistics</h1>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>
      
      <div className="progress-section">
        <h2 className="section-title">Weekly Progress</h2>
        <div style={{ padding: '1rem' }}>
          <div style={{ display: 'flex', height: '200px', alignItems: 'end', gap: '1rem' }}>
            {[65, 70, 68, 75, 80, 78, 85].map((value, index) => (
              <div key={index} style={{ 
                background: 'linear-gradient(180deg, #7E57C2, #B39DDB)', 
                width: '40px', 
                height: `${value}%`,
                borderRadius: '8px 8px 0 0'
              }}></div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
              <div key={day} style={{ textAlign: 'center', color: '#757575' }}>{day}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;