import React from 'react';

const About = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-orange-400 font-medium text-lg">About us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            We Create the Best <span className="text-orange-400">Foody Product</span>
          </h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
            bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium
            donec id elementum.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center">
              <span className="text-orange-400 text-xl mr-2">✔</span>
              Lacus nisi, et ac dapibus sit eu velit in consequat.
            </li>
            <li className="flex items-center">
              <span className="text-orange-400 text-xl mr-2">✔</span>
              Quisque diam pellentesque bibendum non dui volutpat fringilla
            </li>
            <li className="flex items-center">
              <span className="text-orange-400 text-xl mr-2">✔</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
          </ul>
          <a
            href="#read-more"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-full text-lg font-medium"
          >
            Read More
          </a>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 flex space-x-4 mt-10 md:mt-0">
          {/* Image 1 */}
          <div className="flex-1">
            <img
              src="/image5.png" 
              alt="reload"
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* Image 2 */}
          <div className="flex-1">
            <img
              src="/image4.png" // Replace with your second image path
              alt="reload"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
