import React from 'react';



const StatCard = ({ stat }) => {
  return (
    <div className="bg-sanskriti-blue-light/50 border border-blue-400/50 rounded-lg p-6 py-12 px-4 text-center mb-8 transform hover:scale-105 transition-transform duration-300 backdrop-blur-sm shadow-2xl">
      <p className="text-4xl font-extrabold text-sanskriti-gold">{stat.value}</p>
      <p className="mt-2 text-gray-200">{stat.label}</p>
    </div>
  );
};

export default StatCard;
