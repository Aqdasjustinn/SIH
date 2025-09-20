import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="search-bar">
        <span>🔍</span>
        <input type="text" placeholder="Search courses, activities..." />
      </div>
      <div className="user-profile">
        <div className="user-info">
          <div className="user-name">Bala</div>
          <div className="user-role">Student</div>
        </div>
        <div className="user-avatar">
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: '#7E57C2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold'
          }}>B</div>
        </div>
      </div>
    </header>
  );
};

export default Header;