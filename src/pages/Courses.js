import React, { useState } from 'react';
import CourseCard from '../components/CourseCard';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const enrolledCourses = [
    {
      id: 1,
      title: 'Mathematics',
      description: 'Learn numbers, shapes, and basic operations',
      progress: 75,
      icon: '➕',
      color: '#7E57C2',
      duration: '3 months',
      hours: '24 hours',
      teacher: 'Mrs. Sharma',
      syllabus: ['Numbers 1-100', 'Basic Addition', 'Subtraction', 'Shapes & Patterns', 'Time & Money'],
      badges: ['Maths Beginner', 'Number Master']
    },
    {
      id: 2,
      title: 'English Language',
      description: 'Reading, writing, and communication skills',
      progress: 60,
      icon: '📖',
      color: '#26A69A',
      duration: '4 months',
      hours: '32 hours',
      teacher: 'Mr. Singh',
      syllabus: ['Alphabet Recognition', 'Basic Reading', 'Simple Sentences', 'Story Comprehension', 'Creative Writing'],
      badges: ['Word Explorer', 'Story Reader']
    },
    {
      id: 3,
      title: 'Science',
      description: 'Discover the world through experiments',
      progress: 45,
      icon: '🔬',
      color: '#FF7043',
      duration: '3 months',
      hours: '20 hours',
      teacher: 'Mrs. Gupta',
      syllabus: ['Plants & Animals', 'Weather & Seasons', 'Simple Machines', 'Water Cycle', 'Solar System'],
      badges: ['Science Explorer']
    },
    {
      id: 4,
      title: 'General Knowledge',
      description: 'Learn about India, world, and current affairs',
      progress: 30,
      icon: '🌍',
      color: '#66BB6A',
      duration: '2 months',
      hours: '16 hours',
      teacher: 'Mr. Kumar',
      syllabus: ['Indian States', 'National Symbols', 'Famous Personalities', 'Festivals', 'Environment'],
      badges: []
    },
    {
      id: 5,
      title: 'Punjabi Language',
      description: 'Learn Punjabi alphabet and basic words',
      progress: 20,
      icon: '📝',
      color: '#FFA726',
      duration: '3 months',
      hours: '18 hours',
      teacher: 'Mrs. Kaur',
      syllabus: ['Punjabi Alphabet', 'Basic Words', 'Simple Sentences', 'Cultural Stories', 'Traditional Songs'],
      badges: []
    }
  ];

  const recommendedCourses = [
    {
      id: 6,
      title: 'Story Reading',
      description: 'Interactive story sessions with moral lessons',
      icon: '📚',
      color: '#AB47BC',
      duration: '1 month',
      hours: '8 hours'
    },
    {
      id: 7,
      title: 'Basic Computer Skills',
      description: 'Introduction to computers and digital literacy',
      icon: '💻',
      color: '#42A5F5',
      duration: '2 months',
      hours: '12 hours'
    },
    {
      id: 8,
      title: 'Environmental Awareness',
      description: 'Learn about nature conservation and sustainability',
      icon: '🌱',
      color: '#4CAF50',
      duration: '1 month',
      hours: '6 hours'
    }
  ];

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCourse(null);
  };

  return (
    <div className="dashboard">
      <h1 className="section-title">My Courses</h1>
      
      {/* Enrolled Courses Section */}
      <div className="courses-section">
        <h2 className="subsection-title">Enrolled Courses</h2>
        <div className="course-grid">
          {enrolledCourses.map(course => (
            <div key={course.id} className="course-card-enhanced" onClick={() => handleCourseClick(course)}>
              <div className="course-header">
                <div className="course-icon" style={{ background: course.color }}>
                  {course.icon}
                </div>
                <div className="course-badges">
                  {course.badges.map((badge, index) => (
                    <span key={index} className="badge">🏆 {badge}</span>
                  ))}
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
              <button className="continue-btn">Continue Learning →</button>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Courses Section */}
      <div className="courses-section">
        <h2 className="subsection-title">Recommended for You</h2>
        <div className="course-grid">
          {recommendedCourses.map(course => (
            <div key={course.id} className="course-card-recommended">
              <div className="course-header">
                <div className="course-icon" style={{ background: course.color }}>
                  {course.icon}
                </div>
                <span className="new-badge">NEW</span>
              </div>
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <div className="course-meta">
                <span>⏱️ {course.duration}</span>
                <span>📚 {course.hours}</span>
              </div>
              <button className="enroll-btn">Enroll Now</button>
            </div>
          ))}
        </div>
      </div>

      {/* Course Details Modal */}
      {showModal && selectedCourse && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedCourse.title}</h2>
              <button className="close-btn" onClick={closeModal}>×</button>
            </div>
            <div className="modal-body">
              <div className="course-info">
                <div className="info-item">
                  <strong>Teacher:</strong> {selectedCourse.teacher}
                </div>
                <div className="info-item">
                  <strong>Duration:</strong> {selectedCourse.duration}
                </div>
                <div className="info-item">
                  <strong>Total Hours:</strong> {selectedCourse.hours}
                </div>
                <div className="info-item">
                  <strong>Progress:</strong> {selectedCourse.progress}%
                </div>
              </div>
              
              <div className="syllabus-section">
                <h3>Syllabus Covered</h3>
                <ul className="syllabus-list">
                  {selectedCourse.syllabus.map((topic, index) => (
                    <li key={index} className={index < selectedCourse.progress / 20 ? 'completed' : ''}>
                      {index < selectedCourse.progress / 20 ? '✅' : '⏳'} {topic}
                    </li>
                  ))}
                </ul>
              </div>

              {selectedCourse.badges.length > 0 && (
                <div className="badges-section">
                  <h3>Achievements</h3>
                  <div className="badges-list">
                    {selectedCourse.badges.map((badge, index) => (
                      <span key={index} className="achievement-badge">🏆 {badge}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="teacher-notes">
                <h3>Teacher's Notes</h3>
                <p>Great progress! Keep practicing daily exercises. Focus on completing the remaining topics to earn more badges.</p>
              </div>
            </div>
            <div className="modal-footer">
              <button className="continue-learning-btn">Continue Learning</button>
              <button className="secondary-btn" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;