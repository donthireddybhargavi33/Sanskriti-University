import React from 'react';
import {Link} from 'react-router-dom';

const Theatre = () => {
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
      <h1 className="text-3xl font-bold mb-4">Theatre</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', marginBottom: '20px' }}>
        <img src="/images/T1.jpeg" alt="Sports 1" style={{ width: '48%', borderRadius: '8px' }} />
        <img src="/images/T4.jpeg" alt="Sports 4" style={{ width: '48%', borderRadius: '8px' }} />
      </div>
      <p>
        This theatre is equipped with 6 A/C well equipped with Lighting and sound system. It has separate Entry and Exit equipped with Door LED panel, Big screen and Sound system. This Facility supports Stage Performances and movement classes, Debates and Seminar purposes.
      </p>
      <iframe width="960" height="515" src="https://www.youtube.com/embed/URQKzJRWV9A?si=4Gc7bpweNPKLxI1m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  );
};

export default Theatre;
