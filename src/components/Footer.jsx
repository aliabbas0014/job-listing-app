import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Logo & Copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-xl font-bold">JobFinder</h1>
          <p className="text-sm mt-1">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Middle Section - Navigation Links */}
        <ul className="flex space-x-6 text-sm">
          <li>
            <a href="#" className="hover:underline">Home</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Jobs</a>
          </li>
          <li>
            <a href="#" className="hover:underline">About</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Contact</a>
          </li>
        </ul>

        {/* Right Section - Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:opacity-80">
            <img src="https://w7.pngwing.com/pngs/282/704/png-transparent-facebook-messenger-logo-icon-facebook-facebook-logo-blue-text-trademark-thumbnail.png" alt="Facebook" className="w-5 h-5" />
          </a>
          <a href="#" className="hover:opacity-80">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwQ_g5h_513q_PfLNDi3z7Yrl0LRU4O4JNvA&s" alt="Instagram" className="w-5 h-5" />
          </a>
          <a href="#" className="hover:opacity-80">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
