import React, { useState } from 'react';

const Progress = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const subjectProgress = [
    { subject: 'Mathematics', progress: 75, color: '#7E57C2', hours: 12 },
    { subject: 'English Language', progress: 60, color: '#26A69A', hours: 8 },
    { subject: 'Science', progress: 45, color: '#FF7043', hours: 6 },
    { subject: 'General Knowledge', progress: 30, color: '#66BB6A', hours: 4 },
    { subject: 'Punjabi Language', progress: 20, color: '#FFA726', hours: 3 }
  ];

  const weeklyData = [
    { day: 'Mon', hours: 2.5, activities: 8 },
    { day: 'Tue', hours: 3.0, activities: 10 },
    { day: 'Wed', hours: 2.0, activities: 6 },
    { day: 'Thu', hours: 3.5, activities: 12 },
    { day: 'Fri', hours: 2.5, activities: 9 },
    { day: 'Sat', hours: 1.5, activities: 5 },
    { day: 'Sun', hours: 1.0, activities: 4 }
  ];

  const leaderboardData = [
    { rank: 1, name: 'Priya Sharma', school: 'Nabha Primary School', score: 95, avatar: '👧' },
    { rank: 2, name: 'Arjun Singh', school: 'Nabha Primary School', score: 92, avatar: '👦' },
    { rank: 3, name: 'Bala (You)', school: 'Nabha Primary School', score: 87, avatar: '👨' },
    { rank: 4, name: 'Kavya Patel', school: 'Nabha Primary School', score: 85, avatar: '👧' },
    { rank: 5, name: 'Rohan Kumar', school: 'Nabha Primary School', score: 82, avatar: '👦' }
  ];

  const performanceInsights = [
    {
      type: 'strength',
      subject: 'English Language',
      message: 'You are doing great in English! Your reading comprehension is excellent.',
      icon: '🌟'
    },
    {
      type: 'improvement',
      subject: 'Science',
      message: 'Spend more time on Science experiments. Try the interactive lab activities.',
      icon: '🔬'
    },
    {
      type: 'strength',
      subject: 'Mathematics',
      message: 'Your problem-solving skills are improving! Keep practicing daily.',
      icon: '🧮'
    }
  ];

  const totalHours = weeklyData.reduce((sum, day) => sum + day.hours, 0);
  const totalActivities = weeklyData.reduce((sum, day) => sum + day.activities, 0);
  const averageScore = 87;

  return (
    <div className="dashboard">
      <h1 className="section-title">My Progress</h1>
      
      {/* Overall Progress Chart */}
      <div className="progress-section">
        <h2 className="subsection-title">Overall Progress Overview</h2>
        <div className="progress-overview">
          <div className="progress-stats">
            <div className="stat-item">
              <div className="stat-value" style={{ color: '#7E57C2' }}>{averageScore}%</div>
              <div className="stat-label">Average Score</div>
            </div>
            <div className="stat-item">
              <div className="stat-value" style={{ color: '#26A69A' }}>{totalHours}h</div>
              <div className="stat-label">This Week</div>
            </div>
            <div className="stat-item">
              <div className="stat-value" style={{ color: '#FF7043' }}>{totalActivities}</div>
              <div className="stat-label">Activities</div>
            </div>
          </div>
          
          <div className="subject-progress-chart">
            <h3>Subject-wise Progress</h3>
            <div className="progress-bars">
              {subjectProgress.map((subject, index) => (
                <div key={index} className="subject-progress-item">
                  <div className="subject-info">
                    <span className="subject-name">{subject.subject}</span>
                    <span className="subject-hours">{subject.hours}h</span>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ 
                          width: `${subject.progress}%`,
                          background: subject.color 
                        }}
                      ></div>
                    </div>
                    <span className="progress-percentage">{subject.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Learning Report */}
      <div className="progress-section">
        <div className="section-header">
          <h2 className="subsection-title">Weekly Learning Report</h2>
          <div className="period-selector">
            <button 
              className={selectedPeriod === 'week' ? 'active' : ''}
              onClick={() => setSelectedPeriod('week')}
            >
              This Week
            </button>
            <button 
              className={selectedPeriod === 'month' ? 'active' : ''}
              onClick={() => setSelectedPeriod('month')}
            >
              This Month
            </button>
          </div>
        </div>
        
        <div className="weekly-chart">
          <div className="chart-container">
            <div className="chart-bars">
              {weeklyData.map((day, index) => (
                <div key={index} className="chart-bar-group">
                  <div 
                    className="chart-bar" 
                    style={{ height: `${(day.hours / 4) * 100}px` }}
                    title={`${day.hours}h, ${day.activities} activities`}
                  ></div>
                  <div className="chart-label">{day.day}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="chart-legend">
            <div className="legend-item">
              <div className="legend-color" style={{ background: '#7E57C2' }}></div>
              <span>Learning Hours</span>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Insights */}
      <div className="progress-section">
        <h2 className="subsection-title">Performance Insights</h2>
        <div className="insights-grid">
          {performanceInsights.map((insight, index) => (
            <div key={index} className={`insight-card ${insight.type}`}>
              <div className="insight-icon">{insight.icon}</div>
              <div className="insight-content">
                <h4>{insight.subject}</h4>
                <p>{insight.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="progress-section">
        <h2 className="subsection-title">Class Leaderboard</h2>
        <div className="leaderboard">
          <div className="leaderboard-header">
            <span>Rank</span>
            <span>Student</span>
            <span>School</span>
            <span>Score</span>
          </div>
          {leaderboardData.map((student, index) => (
            <div key={index} className={`leaderboard-row ${student.name === 'Bala (You)' ? 'current-user' : ''}`}>
              <div className="rank">
                {student.rank === 1 && '🥇'}
                {student.rank === 2 && '🥈'}
                {student.rank === 3 && '🥉'}
                {student.rank > 3 && student.rank}
              </div>
              <div className="student-info">
                <span className="avatar">{student.avatar}</span>
                <span className="name">{student.name}</span>
              </div>
              <div className="school">{student.school}</div>
              <div className="score">{student.score}%</div>
            </div>
          ))}
        </div>
        <div className="leaderboard-note">
          <p>🏆 Compete with classmates from Nabha Primary School. Keep learning to climb the leaderboard!</p>
        </div>
      </div>

      {/* Achievement Summary */}
      <div className="progress-section">
        <h2 className="subsection-title">Recent Achievements</h2>
        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-icon">🏆</div>
            <div className="achievement-info">
              <h4>Maths Beginner</h4>
              <p>Completed basic addition and subtraction</p>
              <span className="achievement-date">2 days ago</span>
            </div>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">📚</div>
            <div className="achievement-info">
              <h4>Story Reader</h4>
              <p>Read 5 stories this week</p>
              <span className="achievement-date">1 week ago</span>
            </div>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">🔬</div>
            <div className="achievement-info">
              <h4>Science Explorer</h4>
              <p>Completed first science experiment</p>
              <span className="achievement-date">2 weeks ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;