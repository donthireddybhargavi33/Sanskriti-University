import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-sanskriti-blue-dark py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white">OUR STUDENTS AND PARENTS SPEAK</h2>
        <div className="mt-8 bg-black aspect-video rounded-lg overflow-hidden shadow-2xl border-4 border-sanskriti-gold/50">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&modestbranding=1&rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
