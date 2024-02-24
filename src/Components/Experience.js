import React from 'react';

function Experience() {
  const experiences = [
    {
      role: 'Software Developer Intern',
      company: 'Hersey Developers',
      duration: 'January 2023 - May 2023',
      location: 'Arlington Heights, IL',
      responsibilities: [
        'Collaborated with cross-functional teams to develop technical solutions, enhancing project collaboration and client satisfaction.',
        'Led the design and implementation of responsive web applications, improving user engagement across devices.',
        'Applied object-oriented programming principles to enhance code readability and maintainability, leading to a reduction in bugs and maintenance time.',
      ],
      color: 'from-purple-600 to-indigo-600',
    },
    {
      role: 'Project Contributor',
      company: 'Apple Student Design Showcase',
      duration: 'May 2023',
      location: 'Virtual',
      responsibilities: [
        'Co-developed “EasyMeal: Recipes,” an app awarded at the Apple Student Design Showcase for its innovative approach to recipe suggestions.',
        'Pioneered front-end development with Swift, enhancing responsive and intuitive user interfaces.',
        'Collaborated on rigorous API integration, ensuring seamless backend communication and data consistency.',
      ],
      color: 'from-green-500 to-teal-500',
    },
    {
      role: 'Team Member',
      company: '“Git Init 2023” Hackathon',
      duration: 'January 2023',
      location: 'Virtual',
      responsibilities: [
        'Contributed to “EasyMeal,” a web application focused on providing customized healthy recipe suggestions, which was recognized as the popular choice at the hackathon.',
        'Supported API integration with MongoDB, improving data management and application performance.',
        'Utilized React, TypeScript, and Tailwind CSS to create an engaging and responsive user interface, enhancing user experience and retention.',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    // Add more experiences as needed
  ];

  return (
    <div className="py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 id="Experience" className="text-2xl font-abc font-medium gradient-text mb-10">02. Experience</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, index) => (
            <div key={index} className={`bg-gradient-to-r ${exp.color} rounded-xl shadow-xl p-6 transform transition duration-500 hover:scale-105 hover:rotate-1`}>
              <h3 className="text-2xl font-semibold">{exp.role}</h3>
              <h4 className="text-xl mb-1">{exp.company}</h4>
              <p className="text-md mb-3">{exp.duration}, {exp.location}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
