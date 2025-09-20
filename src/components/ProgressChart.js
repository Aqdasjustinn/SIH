import React from 'react';

const ProgressChart = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        marginBottom: '1rem' 
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#7E57C2' }}>75%</div>
          <div style={{ color: '#757575' }}>Overall Progress</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#26A69A' }}>12</div>
          <div style={{ color: '#757575' }}>Courses Completed</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#FF7043' }}>24</div>
          <div style={{ color: '#757575' }}>Learning Hours</div>
        </div>
      </div>
      
      <div style={{ 
        background: '#E0E0E0', 
        borderRadius: '10px', 
        height: '20px', 
        marginBottom: '1rem' 
      }}>
        <div style={{ 
          background: 'linear-gradient(90deg, #7E57C2, #26A69A)', 
          borderRadius: '10px', 
          height: '100%', 
          width: '75%' 
        }}></div>
      </div>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        fontSize: '0.9rem', 
        color: '#757575' 
      }}>
        <span>Last week: 68%</span>
        <span>+7% improvement</span>
      </div>
    </div>
  );
};

export default ProgressChart;