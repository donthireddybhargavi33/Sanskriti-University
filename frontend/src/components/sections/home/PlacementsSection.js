import React from 'react';
import StatCard from '../../../pages/StatCard';
import { PLACEMENT_STATS, COMPANIES } from '../constants';

const Placements = () => {
  return (
    <section className="bg-sanskriti-blue-dark py-16 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
        {PLACEMENT_STATS.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">OUR PLACEMENTS</h2>
      </div>
      <div className="bg-white py-8">
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <div className="flex items-center space-x-8">
            {COMPANIES.map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
                style={{ minWidth: '20%' }} // 5 logos visible (100% / 5 = 20%)
              >
                {company.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Placements;
