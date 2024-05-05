import React from "react";

const Footer = () => {
  return (
    
    <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6 md:mb-0">
          <h5 className="text-lg font-bold mb-3">About Us</h5>
          <p className="text-sm">Reality United Info Pvt Ltd specializes in real estate services, offering expert guidance and solutions for property transactions.</p>
        </div>
        <div className="w-full md:w-1/4 px-4">
          <h5 className="text-lg font-bold mb-3">Quick Links</h5>
          <ul className="text-sm">
            <li className="mb-2"><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
            <li className="mb-2"><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
            <li className="mb-2"><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 px-4">
          <h5 className="text-lg font-bold mb-3">Follow Us</h5>
          <ul className="list-none text-sm">
            <li className="mb-2"><a href="https://www.instagram.com/example" className="text-gray-400 hover:text-white">Instagram</a></li>
            <li className="mb-2"><a href="https://twitter.com/example" className="text-gray-400 hover:text-white">Twitter</a></li>
            <li className="mb-2"><a href="https://www.facebook.com/example" className="text-gray-400 hover:text-white">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-6 pt-6 text-center">
        <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
