import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Support Section */}
        <div>
          <h2 className="text-white font-bold text-lg mb-4">Still You Need Our Support?</h2>
          <p className="mb-4">Don’t wait, make a smart & logical quote here. It’s pretty easy.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 p-2 rounded-l bg-gray-700 text-white placeholder-gray-400"
            />
            <button className="bg-orange-500 px-4 py-2 rounded-r text-white">Subscribe Now</button>
          </div>
        </div>

        {/* About Us Section */}
        <div>
          <h2 className="text-white font-bold text-lg mb-4">About Us</h2>
          <p className="mb-4">
            Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and
            professional chauffeured car service in major cities across the world.
          </p>
          <p className="text-orange-500 font-bold">Opening Hours</p>
          <p>Mon - Sat(8:00 - 6:00)</p>
          <p>Sunday - Closed</p>
        </div>

        {/* Useful Links Section */}
        <div>
          <h2 className="text-white font-bold text-lg mb-4">Useful Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">News</a></li>
            <li><a href="#" className="hover:text-white">Partners</a></li>
            <li><a href="#" className="hover:text-white">Team</a></li>
            <li><a href="#" className="hover:text-white">Menu</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Recent Post Section */}
        <div>
          <h2 className="text-white font-bold text-lg mb-4">Recent Post</h2>
          <ul className="space-y-4">
            {['Is fastfood good for your body?', 'Change your food habit With organic food', 'Do you like fastfood for your life?'].map((post, index) => (
              <li key={index} className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-700"></div>
                <div>
                  <a href="#" className="hover:text-white">{post}</a>
                  <p className="text-sm text-gray-500">February 28, 2022</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2022 by Ayeman. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {['facebook', 'twitter', 'instagram', 'youtube', 'pinterest'].map((platform) => (
              <a href="#" key={platform} className="text-gray-400 hover:text-white">
                <i className={`fab fa-${platform}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
