import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <div className="course-header">
        <div className="course-icon" style={{ background: course.color }}>
          {course.icon}
        </div>
      </div>
      <h3 className="course-title">{course.title}</h3>
      <p className="course-description">{course.description}</p>
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
    </div>
  );
};

export default CourseCard;