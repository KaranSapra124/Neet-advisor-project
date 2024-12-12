import React from 'react';

const ContactBanner = () => {
  return (
    <div className="max-w-screen-xl mx-auto shadow-xl shadow-black rounded-xl my-10 p-8  flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-8 lg:space-y-0">
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
          src='https://videocdn.cdnpk.net/videos/a17b4711-3734-48f8-a326-d9f7ff3e2894/horizontal/previews/clear/large.mp4?token=exp=1734008068~hmac=73ab808569a8d66d05d6ee73ae97ead6d1a512fb1abf37b59eda6737e99bfb53'
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
