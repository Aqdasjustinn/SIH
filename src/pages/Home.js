import React from 'react';
import CourseCard from '../components/CourseCard';
import ProgressChart from '../components/ProgressChart';

const Home = () => {
  const courses = [
    {
      id: 1,
      title: 'Mathematics',
      description: 'Learn numbers, shapes, and basic operations',
      progress: 75,
      icon: '➕',
      color: '#7E57C2'
    },
    {
      id: 2,
      title: 'English Language',
      description: 'Reading, writing, and communication skills',
      progress: 60,
      icon: '📖',
      color: '#26A69A'
    },
    {
      id: 3,
      title: 'Science',
      description: 'Discover the world through experiments',
      progress: 45,
      icon: '🔬',
      color: '#FF7043'
    },
    {
      id: 4,
      title: 'Art & Creativity',
      description: 'Express yourself through drawing and music',
      progress: 30,
      icon: '🎨',
      color: '#66BB6A'
    }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="welcome-text">
          <h1>Welcome back, Bala! 👋</h1>
          <p>Continue your learning journey today</p>
        </div>
      </div>

      <div className="progress-section">
        <h2 className="section-title">My Progress Overview</h2>
        <ProgressChart />
      </div>

      <div>
        <h2 className="section-title">My Courses</h2>
        <div className="course-grid">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;