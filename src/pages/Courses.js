import React, { useState } from 'react';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const enrolledCourses = [
    {
      id: 1,
      title: 'Mathematics',
      description: 'Learn numbers, shapes, and basic operations',
      progress: 75,
      icon: '➕',
      color: '#7E57C2',
      teacher: 'Mrs. Sharma'
    },
    {
      id: 2,
      title: 'English Language',
      description: 'Reading, writing, and communication skills',
      progress: 60,
      icon: '📖',
      color: '#26A69A',
      teacher: 'Mr. Singh'
    },
    {
      id: 3,
      title: 'Science',
      description: 'Discover the world through experiments',
      progress: 45,
      icon: '🔬',
      color: '#FF7043',
      teacher: 'Mrs. Gupta'
    }
  ];

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="dashboard">
      <h1 className="section-title">My Courses</h1>
      
      <div className="course-grid">
        {enrolledCourses.map(course => (
          <div key={course.id} className="course-card" onClick={() => handleCourseClick(course)}>
            <div className="course-header">
              <div className="course-icon" style={{ background: course.color }}>
                {course.icon}
              </div>
            </div>
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <div className="course-teacher">Teacher: {course.teacher}</div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <div className="progress-text">
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
            <button className="continue-btn">Continue Learning →</button>
          </div>
        ))}
      </div>

      {selectedCourse && (
        <div className="course-modal">
          <div className="modal-content">
            <h2>{selectedCourse.title}</h2>
            <p>{selectedCourse.description}</p>
            <button onClick={() => setSelectedCourse(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;