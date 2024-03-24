import React from 'react';

const Faq = () => {
  return (
    <section className="p-8 border border-gray-300 rounded-lg">
      <h2 className="text-3xl font-bold mb-8 font-hiragino-mincho-pro-center">Frequently Asked Questions</h2>
      <div className="grid grid-cols-2 gap-8">
        {/* Left column */}
        <div className="col-span-1">
          <div className="space-y-4">
            <p className="text-sm text-black font-hiragino-mincho-pro-center-left">What will the course structure be like?</p>
            <p className="text-sm text-black font-hiragino-mincho-pro-center-left">What is GammaInnovations and How I will get the paid internship there?</p>
            <p className="text-sm text-black font-hiragino-mincho-pro-center-left">I am from a non-tech background. Am I eligible?</p>
            <p className="text-sm text-black font-hiragino-mincho-pro-center-left">What will be the duration of the course?</p>
          </div>
        </div>
        {/* Right column */}
        <div className="col-span-1">
          <div className="space-y-4">
            <p className="text-sm text-black font-hiragino-mincho-pro-center-left">On which platform live classes, mock interviews, and mock tests will be Conducted</p>
            <p className="text-sm text-black font-hiragino-mincho-pro-center-left">How can I ask my doubts during the course?</p>
            <p className="text-sm text-black font-hiragino-mincho-pro-center-left">How will I receive placement assistance?</p>
            <p className="text-sm text-black font-hiragino-mincho-pro-center-left">Tell me more about "Full Refund if Unplaced" policy?</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
