import React from 'react';
import {Link} from 'react-router-dom';
const Sports = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
          <Link to="/" style={{
               position: 'absolute',
              display: 'flex',
              padding: '10px 2px',
              backgroundColor: '#f7b500',
              color: '#0a183d',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              transition: 'all 0.3s ease',
            }}>
              Home
            </Link><br></br>
      <h1 className="text-3xl font-bold mb-6">Sports</h1>
      <p className="mb-4">
        For 360 degrees personality development, it is absolutely essential to ensure participation of the students in different types of sports. We at Sanskriti are well aware of the necessity of physical exercises and importance of sports as an important pastime for students.
      </p>
      <p className="mb-4">
        The campus is equipped with sports facilities that include Badminton, Volleyball, Football, Lawn Tennis, Basketball, Cricket, etc. Students are encouraged to play both outdoor and indoor games after their classes and during weekends, inter-institute and intra-institute tournaments on various games are held as per the schedule planned in the calendar of activities. The year-long activity ends with Annual Sports Meet that brings out the hidden talents of the students in different games.
      </p>
      <p className="mb-4">
        As a matter of routine, all students are encouraged to inculcate the habit of physical exercise on regular basis which assists in development of their physical and mental abilities. The gymnasium in the campus with various equipments for weight-lifting and other activities offers the students the opportunity to indulge in exercises for maintaining physical fitness.
      </p>
      <p className="mb-4">
        The students who perform well in sports and cultural activities are nominated for participating in inter-college meets organized by the university which provides an opportunity to the students to show-case their talents that can act as spring-board, for some students, to excel in their fields of activity at State and National levels.
      </p>

      {/* Image rows */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', marginBottom: '20px' }}>
        <img src="/images/s1.jpeg" alt="Sports 1" style={{ width: '48%', borderRadius: '8px' }} />
        <img src="/images/s2.jpeg" alt="Sports 2" style={{ width: '48%', borderRadius: '8px' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <img src="/images/s3.jpeg" alt="Sports 3" style={{ width: '48%', borderRadius: '8px' }} />
        <img src="/images/s4.jpeg" alt="Sports 4" style={{ width: '48%', borderRadius: '8px' }} />
      </div>
    </div>
  );
};

export default Sports;
