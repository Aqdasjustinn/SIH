import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Progress from './pages/Progress';
import Courses from './pages/Courses';
import Statistics from './pages/Statistics';
import Activities from './pages/Activities';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch(activePage) {
      case 'courses':
        return <Courses />;
      case 'progress':
        return <Progress />;
      case 'settings':
        return <Settings />;
      case 'statistics':
        return <Statistics />;
      case 'activities':
        return <Activities />;
      default:
        return <Home />;
    }
  };

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