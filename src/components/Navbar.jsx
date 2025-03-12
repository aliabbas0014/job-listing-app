import { useState } from "react";
import { scrollToJob, scrollToAbout } from "../components/scroll"; // Import the function

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-blue-600">JobFinder</h1>

          {/* Hamburger Icon (Mobile) */}
          <button
            className="md:hidden text-gray-700 text-3xl"
            onClick={toggleMenu}
          >
            ☰
          </button>

          {/* Navigation Links */}
          <ul
            className={`md:flex space-x-6 absolute md:static bg-white w-full md:w-auto p-4 md:p-0 transition-all duration-300 ease-in-out ${
              menuOpen
                ? "top-16 left-0 flex justify-center items-center z-50"
                : "hidden md:flex justify-center items-center"
            }`}
          >
            <li>
              <a
                href="#"
                className="block py-2 text-gray-700 hover:text-blue-500"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <button
                className="block py-2 text-gray-700 hover:text-blue-500"
                onClick={() => {
                  scrollToJob(); // Scroll to job listings
                  setMenuOpen(false); // Close menu after clicking
                }}
              >
                Jobs
              </button>
            </li>
            <li>
            <button
                className="block py-2 text-gray-700 hover:text-blue-500"
                onClick={() => {
                  scrollToAbout(); // Scroll to job listings
                  setMenuOpen(false); // Close menu after clicking
                }}
              >
                About
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
