import React from 'react';

function CTAWithFooter() {
  return (
    <section className="bg-white px-6 py-20 md:px-12 text-center">
      
      {/* Call to Action */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        Be one of the first to use Taskly.
      </h2>
      
      <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto mb-16">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Join Waitlist
        </button>
      </form>

      {/* Footer Links */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-600 mb-4">
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">Contact</a>
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-500">&copy; 2025 Taskly</p>
    </section>
  );
}

export default CTAWithFooter;
