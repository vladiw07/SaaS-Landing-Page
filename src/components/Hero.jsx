import React from 'react';
import HeroImage from '../assets/images/HeroImage.png'; // Correct image import

function Hero() {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between">
        
        {/* Left Content */}
        <div className="w-full text-center lg:text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Organize Work.<br />Boost Productivity.
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Taskly helps remote teams stay on track with a distraction-free task manager.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105">
            Get Early Access
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full flex justify-center lg:justify-end">
          <img
            src={HeroImage}
            alt="Illustration"
            className="max-w-md w-full"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
