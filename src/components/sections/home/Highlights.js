import React, { useState } from 'react';

const highlightImages = [
  { id: 1, src: 'https://source.unsplash.com/random/300x200?1', alt: 'Highlight 1' },
  { id: 2, src: 'https://source.unsplash.com/random/300x200?2', alt: 'Highlight 2' },
  { id: 3, src: 'https://source.unsplash.com/random/300x200?3', alt: 'Highlight 3' },
  { id: 4, src: 'https://source.unsplash.com/random/300x200?4', alt: 'Highlight 4' },
  { id: 5, src: 'https://source.unsplash.com/random/300x200?5', alt: 'Highlight 5' },
  { id: 6, src: 'https://source.unsplash.com/random/300x200?6', alt: 'Highlight 6' },
  { id: 7, src: 'https://source.unsplash.com/random/300x200?7', alt: 'Highlight 7' },
  { id: 8, src: 'https://source.unsplash.com/random/300x200?8', alt: 'Highlight 8' },
];

const Highlights = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    if (startIndex + itemsPerPage < highlightImages.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const currentImages = highlightImages.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="py-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-sanskriti-gold">TOP HIGHLIGHTS</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Left - Main Highlight Image */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070&auto=format&fit=crop"
            alt="Main Highlight"
            className="w-full h-full object-cover rounded-lg shadow"
          />
          <p className="mt-2 text-lg font-semibold">Sanskriti Business Conclave 2025</p>
        </div>

        {/* Right - 2x2 Grid Carousel */}
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4">
            {currentImages.map((image) => (
              <div key={image.id} className="bg-white rounded-lg shadow overflow-hidden">
                <img src={image.src} alt={image.alt} className="w-full h-32 object-cover" />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="bg-sanskriti-blue-light text-white px-4 py-2 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex + itemsPerPage >= highlightImages.length}
              className="bg-sanskriti-blue-light text-white px-4 py-2 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
