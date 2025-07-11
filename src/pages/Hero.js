import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: 'https://picsum.photos/seed/hero1/800/600',
    title: 'Where Innovation Meets Opportunity',
    grant: '₹2.5 Crore',
    grantText: 'Startup Grant Sanctioned for Sanskriti Incubation Centre by DST, Govt. of India',
    admission: 'Admission Open 2025-26',
  },
  {
    image: 'https://picsum.photos/seed/hero2/800/600',
    title: 'Excellence in Education',
    grant: 'Top Rankings',
    grantText: 'Recognized as a leading university for academic and research excellence.',
    admission: 'Apply for Fall Semester',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const slide = slides[currentSlide];

  return (
    <section
      className="relative h-[60vh] bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            {slide.title}
          </h1>
          <div className="mt-6 p-4 bg-black bg-opacity-30 rounded-lg backdrop-blur-sm border border-white/20 inline-block">
            <p className="text-4xl font-bold text-sanskriti-gold">{slide.grant}</p>
            <p className="mt-1 max-w-sm">{slide.grantText}</p>
          </div>
          <div className="mt-6">
            <span className="bg-sanskriti-gold text-sanskriti-blue-dark font-bold py-2 px-6 rounded-full">
              {slide.admission}
            </span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-sanskriti-gold' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
