import React from 'react';

const InfoCard = ({ card }) => {
  return (
    <div className="bg-sanskriti-blue-dark rounded-lg shadow-xl overflow-hidden text-white">
      <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-sanskriti-gold">{card.title}</h3>
        <p className="mt-2 text-gray-300">{card.description}</p>
        <div className="mt-4">
          <a
            href="#"
            className="bg-sanskriti-gold text-sanskriti-blue-dark font-bold py-2 px-6 rounded hover:bg-sanskriti-gold-dark transition-colors"
          >
            VIEW MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
