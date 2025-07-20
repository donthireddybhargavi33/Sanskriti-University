import React from 'react';
import StatCard from '../components/sections/home/StatCard';
import { SUCCESS_STATS } from '../constants';

const SuccessStats = () => {
  return (
    <section className="py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">OUR SUCCESS</h2>
      </div>
      <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {SUCCESS_STATS.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>
    </section>
  );
};
