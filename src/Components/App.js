import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../index.css'; // Ensure this CSS file contains your gradient definitions

function App() {
  const [showLinks, setShowLinks] = useState(false);
  const [offset, setOffset] = useState(-70); // Default offset for large screens

  const handleToggle = () => setShowLinks(!showLinks);

  useEffect(() => {
    const updateOffset = () => {
      if (window.innerWidth < 768) { // For small devices
        setOffset(-165); // Smaller offset for smaller screens
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) { // For medium devices
        setOffset(-65); // Medium offset for medium screens
      } else {
        setOffset(-70); // Larger offset for larger screens
      }
    };

    updateOffset(); // Set offset on initial load
    window.addEventListener('resize', updateOffset); // Add event listener for window resize
    return () => window.removeEventListener('resize', updateOffset); // Cleanup on unmount
  }, []);

  const downloadResume = () => {
    window.open('https://firebasestorage.googleapis.com/v0/b/yourportfolio.appspot.com/o/YourResume.pdf?alt=media&token=your-token', '_blank');
  };

  return (
    <div>
      <nav className="flex items-center flex-wrap background-color p-6 justify-end">
        <div className="block lg:hidden justify-end">
          <button
            className="flex items-center px-3 py-2 border rounded text-white border-white hover:border-primary "
            onClick={handleToggle}
          >
            <svg
              className="fill-current h-3 w-3 "
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${showLinks ? 'block' : 'hidden'} w-full flex-grow lg:flex justify-right text-right`}
        >
          <div className="text-sm lg:flex-grow lg:text-right">
            <Link
              to="About"
              smooth={true}
              duration={500}
              offset={offset}
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover-gradient-text font-abc font-light mr-4"
              onClick={() => setShowLinks(false)}
            >
              <span className="gradient-text">00.</span> About
            </Link>
            <Link
              to="Projects"
              smooth={true}
              duration={500}
              offset={offset}
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover-gradient-text font-abc font-light mr-4"
              onClick={() => setShowLinks(false)}
            >
              <span className="gradient-text">01.</span> Projects
            </Link>
            <Link
              to="Experience"
              smooth={true}
              duration={500}
              offset={offset}
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover-gradient-text font-abc font-light mr-4"
              onClick={() => setShowLinks(false)}
            >
              <span className="gradient-text">02.</span> Experience
            </Link>
            <Link
              to="Contact"
              smooth={true}
              duration={500}
              offset={offset}
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover-gradient-text font-abc font-light mr-4"
              onClick={() => setShowLinks(false)}
            >
              <span className="gradient-text">03.</span> Contact
            </Link>
            <button onClick={downloadResume} className="inline-block px-2 py-2 mt-4 lg:mt-0 rounded text-black bg-gradient-to-r from-[#6fddf8] to-[#007CF0] hover:from-[#5bc6ff] hover:to-[#4da7db] transition duration-300 shadow-lg text-xs">
            <span className="flex items-center">
              Download Resume
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
