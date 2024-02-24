import React from 'react';

function About() {
  return (
    <div className=""> {/* Adjust the margin bottom values as needed */}
      <h1 id="About" className="text-2xl font-abc font-medium gradient-text mt-8 mb-4 md:mb-8">00. About</h1>
      <div className="flex flex-col md:flex-row items-center justify-between mt-8 md:mt-32 mb-4 md:mb-8">
        <img src="alex.png" className="w-32 md:w-48 lg:w-64 mb-8 md:mb-0 md:ml-8 lg:ml-12 md:order-last" alt="your-image-description-here" />
        <p className="text-base md:text-lg font-abc font-light text-[#ffff] text-container">
          I am a very passionate and driven Computer Science student from Illinois State University, specializing in software development and user-centric design. My experience as a Software Developer Intern and achievements, including winning the Apple Student Design Showcase, highlight my ability to collaborate effectively with teams and innovate solutions that meet user needs. I am proficient in a range of technologies, including Java, SwiftUI, Swift, Figma, JavaScript, React.js, and Tailwind CSS. Through my coursework and participation in the Web Development Club, I have honed my skills in object-oriented programming, responsive web design, and agile development methodologies. I am dedicated to leveraging my skills to create impactful and intuitive digital experiences.
        </p>
      </div>
    </div>
  );
}

export default About;
