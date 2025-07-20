// HeroSection.jsx
import React, { useState } from 'react';
import ApplyNowModal from '../../ApplyNowModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative bg-cover bg-center text-white p-6 sm:p-10 bg-[url('https://picsum.photos/seed/hero/1200/600')]">
      <div className="p-6 sm:p-10 rounded-lg max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold">For Excellence in Life</h1>
        <p className="mt-2 sm:mt-4 text-base sm:text-lg">Top Emerging Management Institute in India - 2024 by Times B School</p>
        <p className="mt-1 sm:mt-2">Accredited with ICAR (Indian Council of Agricultural Research)</p>
        <p className="mt-1 sm:mt-2 text-lg sm:text-xl font-semibold text-yellow-300">Admission Open 2025</p>
        <button
          className="mt-4 sm:mt-6 bg-yellow-400 text-black font-semibold py-2 px-4 sm:py-2 sm:px-6 rounded hover:bg-yellow-500"
          onClick={() => setIsModalOpen(true)}
        >
          Apply Now
        </button>
      </div>

      {isModalOpen && (
        <>
          <ApplyNowModal onClose={() => setIsModalOpen(false)} />
          <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
        </>
      )}
    </section>
  );
};

export default HeroSection;
