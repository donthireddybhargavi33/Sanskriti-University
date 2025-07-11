import React from 'react';
import { RESEARCH_STATS } from '../constants';

const Research = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-sanskriti-blue-dark">CUTTING EDGE RESEARCH</h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Leading the search for knowledge with our highly equipped research facilities.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-12">
          {RESEARCH_STATS.map((stat, index) => (
            <div key={index}>
              <p className="text-3xl font-bold text-sanskriti-blue-dark">{stat.value}</p>
              <p className="mt-1 text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://picsum.photos/seed/research/800/500"
            alt="Research Centre of Excellence"
            className="w-full h-auto"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-sanskriti-blue-dark/80 text-white p-4 flex justify-between items-center">
            <h3 className="font-bold text-xl">Centre of Excellence</h3>
            <a
              href="#"
              className="bg-sanskriti-gold text-sanskriti-blue-dark font-bold py-2 px-4 rounded text-sm"
            >
              READ MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
