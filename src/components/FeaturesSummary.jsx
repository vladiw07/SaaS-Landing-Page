import React from 'react';
import { FaCheck, FaLock } from 'react-icons/fa';
import { FiBell } from 'react-icons/fi';
import { BiRefresh } from 'react-icons/bi';

function FeaturesSummary() {
  return (
    <section className="bg-white px-6 py-20 md:px-12">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        
        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full text-center">
          <div className="flex flex-col items-center gap-2">
            <FaCheck className="text-xl" />
            <p className="font-medium">Minimal UI,<br />no distractions</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FiBell className="text-xl" />
            <p className="font-medium">Smart reminders<br />& due dates</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <BiRefresh className="text-xl" />
            <p className="font-medium">Real-time sync<br />across devices</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaLock className="text-xl" />
            <p className="font-medium">End-to-end<br />encrypted tasks</p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-12 max-w-2xl text-gray-700 italic">
          “We switched to Taskly and team productivity went up 28%.”
          <p className="mt-2 text-sm not-italic text-gray-600">
            – Emma, Head of Ops at Startbase
          </p>
        </div>

        {/* Pricing Text */}
        <div className="mt-12 text-lg font-medium">
          Free for individuals. <span className="font-semibold">$5/month per team member.</span>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSummary;
