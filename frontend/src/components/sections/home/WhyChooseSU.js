import React from 'react';
import InfoCard from '../../../pages/InfoCard';
import { WHY_CHOOSE_US_CARDS } from '../constants';

const WhyChooseSU = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-sanskriti-blue-dark">WHY CHOOSE SU?</h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Be a part of an Edifying learning experience which offers additional value to your future.
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {WHY_CHOOSE_US_CARDS.map((card, index) => (
          <InfoCard key={index} card={card} />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSU;
