import React from 'react';

const Rankings = () => {
  return (
    <div style={{backgroundColor:'white'}} className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Rankings &amp; Awards</h1>
      <p className="text-lg mb-8">Sanskriti among the Top Ranking Universities in India</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border p-4 text-center shadow-md rounded">
          <img
            src="/images/the-week-logo.png"
            alt="The Week"
            className="mx-auto mb-4"
            style={{ maxWidth: '150px' }}
          />
          <p className="text-sm italic">
            * Sanskriti University Ranked 4th Emerging Multidisciplinary Universities In All India By The Week Magazine 2025.
          </p>
        </div>
        <div className="border p-4 text-center shadow-md rounded">
          <img
            src="/images/the-week-logo.png"
            alt="The Week"
            className="mx-auto mb-4"
            style={{ maxWidth: '150px' }}
          />
          <p className="text-sm italic">
            * Sanskriti University Ranked 11th Private &amp; Deemed Multidisciplinary Universities In North Zone By The Week Magazine 2025.
          </p>
        </div>
        <div className="border p-4 text-center shadow-md rounded">
          <img
            src="/images/the-week-logo.png"
            alt="The Week"
            className="mx-auto mb-4"
            style={{ maxWidth: '150px' }}
          />
          <p className="text-sm italic">
            * Sanskriti University Ranked 30th Private &amp; Deemed Multidisciplinary Universities In All India By The Week Magazine 2025.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rankings;
