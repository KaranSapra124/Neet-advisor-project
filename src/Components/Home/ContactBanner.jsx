import React from 'react';

const ContactBanner = () => {
  return (
    <div className="max-w-screen-xl bg-gray-100 mx-auto shadow-2xl rounded-xl my-20 p-8  flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-8 lg:space-y-0">
      <div className="lg:w-1/2 flex flex-col items-start p-8">
        <h1 className="text-yellow-400 text-3xl font-bold mb-4">Still Got Doubts?</h1>
        <h1 className="font-bold text-xl text-gray-800 mb-6">Get Your Doubts Cleared By Booking A 1 to 1 Meet!</h1>
        <button className="bg-yellow-400 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-500 transition-colors duration-300">
          Book Now
        </button>
      </div>
      <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
        <video
          id="videoId"
          src='https://videocdn.cdnpk.net/videos/422e91f1-7306-4235-bb3f-684e2a758389/horizontal/previews/clear/large.mp4?token=exp=1734249211~hmac=87cfcfd58b9e138e192b9cb056f93af12dfa3d0851c8a00b1464c8ba5ef86103'
          loop
          autoPlay
          muted
          className="w-full max-w-md rounded-lg shadow-lg transform lg:translate-x-12 lg:-translate-y-12"
        />
      </div>
    </div>
  );
};

export default ContactBanner;
