import React from 'react';
import {Link} from 'react-router-dom';
const Medical = () => {
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
      <h1 className="text-3xl font-bold mb-6">Medical Facilities</h1>
      <p className="mb-4">
        Sanskriti University is well aware of the requirements of medical attention to the students. We are particular about well-being of the students and also conscious about our responsibilities towards providing timely medical assistance in case of either injury or ill-health.
      </p>
      <p className="mb-4">
        The campus has engaged a specialist doctor for medical aid 24x7 and he is just a call away. We also have arrangement with the nearby hospitals for admitting/attending to emergencies and/or routine treatment.
      </p>
      <p className="mb-4">
        A dedicated room has been provided in the campus with first aid facilities which functions as health centre if and when immediate medical attention is required. Necessary treatment is provided at this centre by trained persons.
      </p>
      <p className="mb-4">
        We have vehicles stationed in the campus for ferrying the injured or sick students with facilities for transporting them in supine condition.
      </p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', marginBottom: '20px' }}>
        <img src="/images/M1.jpeg" alt="library1" style={{ width: '48%', borderRadius: '8px' }} />
        <img src="/images/M2.jpeg" alt="library2" style={{ width: '48%', borderRadius: '8px' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <img src="/images/M3.jpeg" alt="library3" style={{ width: '48%', borderRadius: '8px' }} />
        <img src="/images/M4.jpeg" alt="library4" style={{ width: '48%', borderRadius: '8px' }} />
      </div>
    </div>
  );
};

export default Medical;
