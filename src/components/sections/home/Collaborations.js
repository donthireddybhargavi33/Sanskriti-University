import React from 'react';

const Collaborations = () => {
  return (
    <section className="py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">WE ARE SPRINTING AHEAD</h2>
      </div>
      <div className="max-w-2xl mx-auto space-y-6">
        <a
          href="#"
          className="block w-full text-center bg-sanskriti-blue-light border border-blue-400/50 rounded-lg p-4 text-xl font-semibold hover:bg-sanskriti-blue-light/70 transition-colors"
        >
          National Collaborations
        </a>
        <a
          href="#"
          className="block w-full text-center bg-sanskriti-blue-light border border-blue-400/50 rounded-lg p-4 text-xl font-semibold hover:bg-sanskriti-blue-light/70 transition-colors"
        >
          International Collaborations
        </a>
      </div>
    </section>
  );
};

export default Collaborations;
