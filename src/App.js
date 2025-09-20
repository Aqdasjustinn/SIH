import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import Activities from './pages/Activities';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch(activePage) {
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