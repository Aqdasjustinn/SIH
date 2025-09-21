import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import Activities from './pages/Activities';
import Courses from './pages/Courses';
import Progress from './pages/Progress';
import Settings from './pages/Settings';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const renderPage = () => {
    switch(activePage) {
      case 'statistics':
        return <Statistics />;
      case 'activities':
        return <Activities />;
      case 'courses':
        return <Courses />;
      case 'progress':
        return <Progress />;
      case 'settings':
        return <Settings />;
      default:
        return <Home />;
    }
  };

  if (!isLoggedIn) {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome to KidsLearn! 👋</h2>
        <p>Fun learning for students</p>
        
        <div className="login-card">
          <h3>Student Login</h3>
          <div className="login-input-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username"
              placeholder="Enter your username" 
            />
          </div>
          <div className="login-input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              placeholder="Enter your password" 
            />
          </div>
          <button 
            className="login-btn"
            onClick={() => setIsLoggedIn(true)}
          >
            Login
          </button>
        </div>
        
        <div className="signup-link">
          <p>Don't have an account?</p>
          <a href="#signup">Create student account</a>
        </div>
      </div>
    </div>
  );
}

  return (
    <div className="app">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="main-content">
        <Header />
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
