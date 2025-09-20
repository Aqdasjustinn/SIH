import React from 'react';

const Activities = () => {
  const activities = [
    { icon: '✅', title: 'Completed Math Quiz', time: '2 hours ago', color: '#66BB6A' },
    { icon: '📚', title: 'Started English Reading', time: '5 hours ago', color: '#7E57C2' },
    { icon: '🔬', title: 'Science Experiment', time: '1 day ago', color: '#FF7043' },
    { icon: '🎨', title: 'Art Project Submitted', time: '2 days ago', color: '#26A69A' },
    { icon: '🏆', title: 'Earned Badge: Math Wizard', time: '3 days ago', color: '#FFA726' }
  ];

  return (
    <div className="dashboard">
      <h1 className="section-title">Recent Activities</h1>
      <div className="activities-list">
        {activities.map((activity, index) => (
          <div key={index} className="activity-item">
            <div className="activity-icon" style={{ background: activity.color }}>
              {activity.icon}
            </div>
            <div className="activity-content">
              <div className="activity-title">{activity.title}</div>
              <div className="activity-time">{activity.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;