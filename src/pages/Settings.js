import React, { useState } from 'react';

const Settings = () => {
  const [profile, setProfile] = useState({
    name: 'Bala',
    class: 'Class 3',
    school: 'Nabha Primary School',
    age: '8 years',
    profilePicture: 'B'
  });

  const [settings, setSettings] = useState({
    language: 'English',
    theme: 'light',
    notifications: true,
    dailyGoal: 2,
    parentalControl: false,
    soundEffects: true,
    autoPlay: false
  });

  const [parentalSettings, setParentalSettings] = useState({
    dailyLearningGoal: 2,
    maxScreenTime: 3,
    progressTracking: true,
    weeklyReports: true,
    restrictContent: false
  });

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
    { code: 'pa', name: 'Punjabi', flag: '🇮🇳' }
  ];

  const handleProfileChange = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleSettingChange = (field, value) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleParentalSettingChange = (field, value) => {
    setParentalSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleProfilePictureUpload = () => {
    // Simulate file upload
    alert('Profile picture upload feature would be implemented here');
  };

  return (
    <div className="dashboard">
      <h1 className="section-title">Settings</h1>
      
      {/* Profile Settings */}
      <div className="settings-section">
        <h2 className="subsection-title">Profile Settings</h2>
        <div className="profile-settings">
          <div className="profile-picture-section">
            <div className="profile-picture">
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: '#7E57C2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold',
                margin: '0 auto'
              }}>
                {profile.profilePicture}
              </div>
              <button className="upload-btn" onClick={handleProfilePictureUpload}>
                📷 Change Photo
              </button>
            </div>
          </div>
          
          <div className="profile-form">
            <div className="form-group">
              <label>Name</label>
              <input 
                type="text" 
                value={profile.name}
                onChange={(e) => handleProfileChange('name', e.target.value)}
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label>Class</label>
              <select 
                value={profile.class}
                onChange={(e) => handleProfileChange('class', e.target.value)}
                className="form-select"
              >
                <option value="Class 1">Class 1</option>
                <option value="Class 2">Class 2</option>
                <option value="Class 3">Class 3</option>
                <option value="Class 4">Class 4</option>
                <option value="Class 5">Class 5</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>School</label>
              <input 
                type="text" 
                value={profile.school}
                onChange={(e) => handleProfileChange('school', e.target.value)}
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label>Age</label>
              <input 
                type="text" 
                value={profile.age}
                onChange={(e) => handleProfileChange('age', e.target.value)}
                className="form-input"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Language Preferences */}
      <div className="settings-section">
        <h2 className="subsection-title">Language Preferences</h2>
        <div className="language-settings">
          <p className="setting-description">
            Choose your preferred language for the interface. This is especially important for students in rural Nabha.
          </p>
          <div className="language-options">
            {languages.map((lang) => (
              <div 
                key={lang.code}
                className={`language-option ${settings.language === lang.name ? 'selected' : ''}`}
                onClick={() => handleSettingChange('language', lang.name)}
              >
                <span className="language-flag">{lang.flag}</span>
                <span className="language-name">{lang.name}</span>
                {settings.language === lang.name && <span className="checkmark">✓</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Theme Options */}
      <div className="settings-section">
        <h2 className="subsection-title">Theme & Accessibility</h2>
        <div className="theme-settings">
          <div className="theme-options">
            <div 
              className={`theme-option ${settings.theme === 'light' ? 'selected' : ''}`}
              onClick={() => handleSettingChange('theme', 'light')}
            >
              <div className="theme-preview light-theme">
                <div className="preview-header"></div>
                <div className="preview-content"></div>
              </div>
              <span>Light Mode</span>
            </div>
            
            <div 
              className={`theme-option ${settings.theme === 'dark' ? 'selected' : ''}`}
              onClick={() => handleSettingChange('theme', 'dark')}
            >
              <div className="theme-preview dark-theme">
                <div className="preview-header"></div>
                <div className="preview-content"></div>
              </div>
              <span>Dark Mode</span>
            </div>
          </div>
          
          <div className="accessibility-options">
            <div className="setting-item">
              <label className="switch">
                <input 
                  type="checkbox" 
                  checked={settings.soundEffects}
                  onChange={(e) => handleSettingChange('soundEffects', e.target.checked)}
                  aria-label="Enable sound effects"
                />
                <span className="slider"></span>
              </label>
              <div className="setting-info">
                <span className="setting-label">Sound Effects</span>
                <span className="setting-description">Play sounds for interactions</span>
              </div>
            </div>
            
            <div className="setting-item">
              <label className="switch">
                <input 
                  type="checkbox" 
                  checked={settings.autoPlay}
                  onChange={(e) => handleSettingChange('autoPlay', e.target.checked)}
                  aria-label="Enable auto-play videos"
                />
                <span className="slider"></span>
              </label>
              <div className="setting-info">
                <span className="setting-label">Auto-play Videos</span>
                <span className="setting-description">Automatically play lesson videos</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Goals */}
      <div className="settings-section">
        <h2 className="subsection-title">Learning Goals</h2>
        <div className="goals-settings">
          <div className="goal-item">
            <label>Daily Learning Goal (hours)</label>
            <div className="goal-selector">
              <button 
                className={settings.dailyGoal === 1 ? 'active' : ''}
                onClick={() => handleSettingChange('dailyGoal', 1)}
              >
                1 hour
              </button>
              <button 
                className={settings.dailyGoal === 2 ? 'active' : ''}
                onClick={() => handleSettingChange('dailyGoal', 2)}
              >
                2 hours
              </button>
              <button 
                className={settings.dailyGoal === 3 ? 'active' : ''}
                onClick={() => handleSettingChange('dailyGoal', 3)}
              >
                3 hours
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Parental/Teacher Controls */}
      <div className="settings-section">
        <h2 className="subsection-title">Parental & Teacher Controls</h2>
        <div className="parental-controls">
          <div className="control-toggle">
            <label className="switch">
              <input 
                type="checkbox" 
                checked={settings.parentalControl}
                onChange={(e) => handleSettingChange('parentalControl', e.target.checked)}
                aria-label="Enable parental controls"
              />
              <span className="slider"></span>
            </label>
            <div className="control-info">
              <span className="control-label">Enable Parental Controls</span>
              <span className="control-description">Allow parents/teachers to monitor progress and set restrictions</span>
            </div>
          </div>
          
          {settings.parentalControl && (
            <div className="parental-settings">
              <div className="setting-item">
                <label>Daily Learning Goal (hours)</label>
                <select 
                  value={parentalSettings.dailyLearningGoal}
                  onChange={(e) => handleParentalSettingChange('dailyLearningGoal', parseInt(e.target.value))}
                  className="form-select"
                >
                  <option value={1}>1 hour</option>
                  <option value={2}>2 hours</option>
                  <option value={3}>3 hours</option>
                  <option value={4}>4 hours</option>
                </select>
              </div>
              
              <div className="setting-item">
                <label>Maximum Screen Time (hours)</label>
                <select 
                  value={parentalSettings.maxScreenTime}
                  onChange={(e) => handleParentalSettingChange('maxScreenTime', parseInt(e.target.value))}
                  className="form-select"
                >
                  <option value={1}>1 hour</option>
                  <option value={2}>2 hours</option>
                  <option value={3}>3 hours</option>
                  <option value={4}>4 hours</option>
                  <option value={5}>5 hours</option>
                </select>
              </div>
              
              <div className="setting-item">
                <label className="switch">
                  <input 
                    type="checkbox" 
                    checked={parentalSettings.progressTracking}
                    onChange={(e) => handleParentalSettingChange('progressTracking', e.target.checked)}
                    aria-label="Enable progress tracking"
                  />
                  <span className="slider"></span>
                </label>
                <div className="setting-info">
                  <span className="setting-label">Progress Tracking</span>
                  <span className="setting-description">Send progress updates to parents/teachers</span>
                </div>
              </div>
              
              <div className="setting-item">
                <label className="switch">
                  <input 
                    type="checkbox" 
                    checked={parentalSettings.weeklyReports}
                    onChange={(e) => handleParentalSettingChange('weeklyReports', e.target.checked)}
                    aria-label="Enable weekly reports"
                  />
                  <span className="slider"></span>
                </label>
                <div className="setting-info">
                  <span className="setting-label">Weekly Reports</span>
                  <span className="setting-description">Send weekly learning summaries</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Notifications */}
      <div className="settings-section">
        <h2 className="subsection-title">Notifications</h2>
        <div className="notification-settings">
          <div className="setting-item">
            <label className="switch">
              <input 
                type="checkbox" 
                checked={settings.notifications}
                onChange={(e) => handleSettingChange('notifications', e.target.checked)}
                aria-label="Enable notifications"
              />
              <span className="slider"></span>
            </label>
            <div className="setting-info">
              <span className="setting-label">Enable Notifications</span>
              <span className="setting-description">Get reminders for daily lessons and activities</span>
            </div>
          </div>
          
          {settings.notifications && (
            <div className="notification-options">
              <div className="notification-time">
                <label>Daily Reminder Time</label>
                <input 
                  type="time" 
                  defaultValue="09:00"
                  className="form-input"
                />
              </div>
              
              <div className="notification-types">
                <div className="notification-item">
                  <input type="checkbox" defaultChecked aria-label="Daily lesson reminders" />
                  <span>Daily lesson reminders</span>
                </div>
                <div className="notification-item">
                  <input type="checkbox" defaultChecked aria-label="Achievement notifications" />
                  <span>Achievement notifications</span>
                </div>
                <div className="notification-item">
                  <input type="checkbox" aria-label="Weekly progress reports" />
                  <span>Weekly progress reports</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Save Settings */}
      <div className="settings-actions">
        <button className="save-btn">Save All Settings</button>
        <button className="reset-btn">Reset to Default</button>
      </div>
    </div>
  );
};

export default Settings;
