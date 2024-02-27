import React from 'react';

function About() {
  return (
    <section id="About" className="py-12 md:py-24">
      <div className="container mx-auto px-4">
      <h2 id="About" className="text-2xl font-abc font-medium gradient-text mb-10">00. About</h2>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="text-lg space-y-6 md:w-3/4">
            <p>I'm a passionate Computer Science student from Illinois State University, focusing on software development and user-centric design. I am dedicated to leveraging my skills to create impactful digital experiences.</p>
            <div>
              <h2 className="text-2xl font-semibold">Skills:</h2>
              <ul className="list-disc pl-5 mt-4">
                <li>Proficient in Java, SwiftUI, Swift, Figma, JavaScript, React.js, and Tailwind CSS.</li>
                <li>Experienced in object-oriented programming, responsive web design, and agile methodologies.</li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/4 flex justify-center md:justify-end">
            <img src="alex.png" alt="Profile" className="w-auto h-48 md:h-64 rounded shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
