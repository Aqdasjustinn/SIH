import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    language: 'English',
    notifications: true,
    sound: true
  });

  return (
    <div className="dashboard">
      <h1 className="section-title">Settings</h1>
      
      <div className="settings-section">
        <h2>Language Preferences</h2>
        <div className="setting-item">
          <label>Select Language:</label>
          <select 
            value={settings.language} 
            onChange={(e) => setSettings({...settings, language: e.target.value})}
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Punjabi">Punjabi</option>
          </select>
        </div>
      </div>

      <div className="settings-section">
        <h2>Notification Settings</h2>
        <div className="setting-item">
          <label>
            <input 
              type="checkbox" 
              checked={settings.notifications}
              onChange={(e) => setSettings({...settings, notifications: e.target.checked})}
            />
            Enable Notifications
          </label>
        </div>
        <div className="setting-item">
          <label>
            <input 
              type="checkbox" 
              checked={settings.sound}
              onChange={(e) => setSettings({...settings, sound: e.target.checked})}
            />
            Enable Sound Effects
          </label>
        </div>
      </div>

      <div className="settings-section">
        <button className="save-btn">Save Settings</button>
      </div>
    </div>
  );
};

export default Settings;