import React from 'react';

const Sidebar = ({ activePage, setActivePage }) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'statistics', label: 'Statistics', icon: '📊' },
    { id: 'activities', label: 'Activities', icon: '🎯' },
    { id: 'courses', label: 'My Courses', icon: '📚' },
    { id: 'progress', label: 'My Progress', icon: '📈' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ];

  return (
    <div className="sidebar">
      <div className="logo">KidsLearn</div>
      <ul className="menu-items">
        {menuItems.map(item => (
          <li
            key={item.id}
            className={`menu-item ${activePage === item.id ? 'active' : ''}`}
            onClick={() => setActivePage(item.id)}
          >
            <span className="menu-icon">{item.icon}</span>
            <span className="menu-label">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;