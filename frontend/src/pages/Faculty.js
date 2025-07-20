import React from 'react';
import { Link } from 'react-router-dom';


const Faculty = () => {
  return (
    <div style={{ padding: '20px',  margin: '0 auto', fontFamily: 'Arial, sans-serif' ,backgroundColor: 'white'}}>
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
      <h1>Experienced Faculty Members</h1>
      <p>
        Faculty members are at the core of high quality education. They play an important role in an educational institution by imparting right kind of education to the students.
      </p>
      <h2>Faculty</h2>
      <p>
        If a faculty member is not conceptually sound, he/she will not be able to provide proper knowledge to the students. This is a serious matter and will adversely affect learning process of the students. Incorrect teaching and consequently, incorrect learning, is totally unacceptable as it will lead to grooming citizens who will not be contributing towards GDP in the desired manner.
      </p>
      <img src="/images/faculty.jpeg" alt="Faculty" style={{ width: '40%', height: 'auto', marginBottom: '20px',marginLeft: '30px' }} />
      <p>
        Sanskriti is well aware of the important role played by a teacher. Accordingly, it makes every effort to ensure that the teachers inducted are of high caliber. Care is taken to ensure that every department has a set number of competent teachers. In the recruitment process, the aspirants are subjected to a rigorous interview process conducted by eminent educationists who ensure that the teachers appointed are competent enough for delivering high quality lectures in class rooms and demonstration in laboratories.
      </p>
      <p>
        Faculty Development Programmes, Seminars, Workshops, etc. are also a part of the teaching-learning process. All faculty members are highly competent, qualified, experienced and devoted. They mentor the students so that every educational and non-educational problem faced by every student is satisfactorily resolved. Every faculty member is encouraged to write research papers for publishing in various journals, magazines etc.
      </p>
      <a href="/FullTimeFaculty.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'underline' }}>
        Open Faculty PDF
      </a>

    </div>
  );
};

export default Faculty;
