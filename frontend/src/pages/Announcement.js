import React from 'react';
import { ANNOUNCEMENTS } from '../constants';

const Announcements = () => {
  return (
    <Section style={{ flex: 1, minWidth: '500px' }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xl font-bold text-sanskriti-blue-dark">
            LATEST ANNOUNCEMENTS
          </h2>
        </div>
        <div className="space-y-4">
          {ANNOUNCEMENTS.map((ann, index) => (
            <div
              key={index}
              className="bg-sanskriti-blue-dark text-white p-4 rounded-lg flex justify-between items-center shadow-md"
            >
              <div>
                <p className="font-semibold">{ann.title}</p>
                <a href="#" className="text-sanskriti-gold hover:underline">
                  {ann.linkText}
                </a>
              </div>
              {ann.isNew && (
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  NEW
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#"
            className="bg-sanskriti-gold text-sanskriti-blue-dark font-bold py-3 px-8 rounded hover:bg-sanskriti-gold-dark transition-colors"
          >
            CLICK FOR MORE UPDATES
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Announcements;
