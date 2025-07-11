import React, { useState } from 'react';

const leftVideos = [
  { name: 'Anushka Sharma', course: 'B.Tech', videoSrc: 'https://img.youtube.com/vi/1/0.jpg' },
  { name: 'Neha Pandey', course: 'BCA', videoSrc: 'https://img.youtube.com/vi/3/0.jpg' },
];

const rightVideos = [
  { name: 'Vidhi Choudhary', course: 'MBA', videoSrc: 'https://img.youtube.com/vi/2/0.jpg' },
  { name: 'Raman Upadhyay', course: 'M.Tech', videoSrc: 'https://img.youtube.com/vi/4/0.jpg' },
];

const SUReviews = () => {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  const handlePrev = (side) => {
    if (side === 'left') {
      setLeftIndex((prev) => (prev - 1 + leftVideos.length) % leftVideos.length);
    } else {
      setRightIndex((prev) => (prev - 1 + rightVideos.length) % rightVideos.length);
    }
  };

  const handleNext = (side) => {
    if (side === 'left') {
      setLeftIndex((prev) => (prev + 1) % leftVideos.length);
    } else {
      setRightIndex((prev) => (prev + 1) % rightVideos.length);
    }
  };

  return (
    <section className="bg-[#213774] py-16 px-4 text-white font-sans">
      <h2 className="text-4xl font-bold text-center mb-10">SU REVIEWS</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* LEFT VIDEO CARD */}
        <div className="flex flex-col items-center gap-4">
          <div className="bg-white text-[#213774] w-full rounded-xl shadow-lg overflow-hidden flex flex-col min-h-[340px] max-w-md">
            <img
              src={leftVideos[leftIndex].videoSrc}
              alt={leftVideos[leftIndex].name}
              className="w-full h-52 object-cover"
            />
            <div className="p-4 text-center mt-auto">
              <p className="uppercase text-sm">{leftVideos[leftIndex].name}</p>
              <p className="font-bold">{leftVideos[leftIndex].course}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => handlePrev('left')}
              className="bg-white text-[#213774] px-4 py-2 rounded shadow hover:bg-[#f0f0f0] font-medium"
            >
              ← Prev
            </button>
            <button
              onClick={() => handleNext('left')}
              className="bg-white text-[#213774] px-4 py-2 rounded shadow hover:bg-[#f0f0f0] font-medium"
            >
              Next →
            </button>
          </div>
        </div>

        {/* RIGHT VIDEO CARD */}
        <div className="flex flex-col items-center gap-4">
          <div className="bg-white text-[#213774] w-full rounded-xl shadow-lg overflow-hidden flex flex-col min-h-[340px] max-w-md">
            <img
              src={rightVideos[rightIndex].videoSrc}
              alt={rightVideos[rightIndex].name}
              className="w-full h-52 object-cover"
            />
            <div className="p-4 text-center mt-auto">
              <p className="uppercase text-sm">{rightVideos[rightIndex].name}</p>
              <p className="font-bold">{rightVideos[rightIndex].course}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => handlePrev('right')}
              className="bg-white text-[#213774] px-4 py-2 rounded shadow hover:bg-[#f0f0f0] font-medium"
            >
              ← Prev
            </button>
            <button
              onClick={() => handleNext('right')}
              className="bg-white text-[#213774] px-4 py-2 rounded shadow hover:bg-[#f0f0f0] font-medium"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SUReviews;
