import React from 'react';
import {Link} from 'react-router-dom';
const Cafeteria = () => {
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
      <h1 className="text-3xl font-bold mb-6">Cafeteria</h1>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', marginBottom: '20px' }}>
        <img src="/images/cafe1.jpeg" alt="cafeteria" style={{ width: '48%', borderRadius: '8px' }} />
        <img src="/images/cafe2.jpeg" alt="cafeteria" style={{ width: '48%', borderRadius: '8px' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <img src="/images/cafe3.jpeg" alt="cafeteria" style={{ width: '48%', borderRadius: '8px' }} />
        <img src="/images/cafe4.jpeg" alt="cafeteria" style={{ width: '48%', borderRadius: '8px' }} />
      </div>
      <p className="mb-4">
        Cafeteria is the place where students relax, unwind and recharge after a hard day at the University. Sanskriti University has a cafeteria that can accommodate around 200-300 students at any point of time for refreshment, lunch etc.
      </p>
      <p className="mb-4">
        The furniture is laid in a manner to accommodate maximum people and yet look aesthetic. Quality and hygiene are the two most important factors in cafeteria. The regular quality control and quality checks at the cafeteria ensure highest standards of hygiene. Rest assured, there is never a compromise on food quality, cleanliness, and overall hygiene at the cafeteria. Be it kitchen or raw materials used for preparation of food, everything goes through a stringent quality check.
      </p>
      <p className="mb-4">
        The cafeteria has sufficient space and the furniture is well laid out for comfortable seating. The entire campus is ‘no smoking zone’ and strict vigil is being maintained in the cafeteria for prohibiting the students from smoking or consuming tobacco in any form.
      </p>
    </div>
  );
};

export default Cafeteria;
