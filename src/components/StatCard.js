import React from 'react';

const StatCard = ({ stat }) => {
  return (
    <div className="stat-card">
      <div className="stat-value" style={{ color: stat.color }}>
        {stat.value}
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
};

export default StatCard;