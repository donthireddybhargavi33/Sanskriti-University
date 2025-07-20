import React from 'react';
import { Link } from 'react-router-dom';

const imageSources = [
  '/photos/E25.jpeg',
  '/photos/E1.jpeg',
  '/photos/E2.jpeg',
  '/photos/E3.jpeg',
  '/photos/E4.jpeg',
  '/photos/E5.jpeg',
  '/photos/E6.jpeg',
  '/photos/E7.jpeg',
  '/photos/E8.jpeg',
  '/photos/E9.jpeg',
  '/photos/E10.jpeg',
  '/photos/E11.jpeg',
  '/photos/E26.jpeg',
  '/photos/E12.jpeg',
  '/photos/E13.jpeg',
  '/photos/E14.jpeg',
  '/photos/E15.jpeg',
  '/photos/E16.jpeg',
  '/photos/E17.jpeg',
  '/photos/E27.jpeg',
  '/photos/E18.jpeg',
  '/photos/E19.jpeg',
  '/photos/E20.jpeg',
  '/photos/E21.jpeg',
  '/photos/E22.jpeg',
  '/photos/E28.jpeg',
  '/photos/E24.jpeg',
  '/photos/E29.jpeg',
  '/photos/E30.jpeg',
];

const PhotoGallery = () => {
  return (
    <div style={{ paddingLeft: '120px', backgroundColor: 'white' }}>
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
      <h1>Photo Gallery</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {imageSources.map((src, index) => (
          <div key={index} style={{ flex: '1 0 21%', maxWidth: '21%', boxSizing: 'border-box' }}>
            <img
              src={src}
              alt={`${index + 1}`}
              style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '8px' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
