import React from 'react';

function Projects() {
  const projectList = [
    {
      title: 'EasyMeal: Recipes',
      description: 'An innovative mobile app for personalized recipe suggestions.',
      technologies: ['SwiftUI', 'Swift', 'Figma'],
      image: 'https://i.ibb.co/nsxVMwK/new.png', // Placeholder image
      url: 'https://github.com/alexstrugacz/EasyMeal-iOS', // Add your project URL here
    },
    {
      title: 'EasyMeal',
      description: 'A web application for custom recipe suggestions based on fitness goals.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Firebase'],
      image: 'https://i.ibb.co/qWJdDcB/Screenshot-2024-02-24-at-12-47-16-PM.png', // Placeholder image
      url: 'https://devpost.com/software/easymeal', // Add your project URL here
    },
    
    // Add more projects here with placeholders and URLs
  ];

  return (
    <div className="h-auto py-16">
      <div className="container mx-auto px-4">
        <h1 id="Projects" className="text-2xl font-abc font-medium gradient-text mb-16">01. Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div key={index} className="bg-black rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 ease-in-out">
              <img src={project.image} alt="Placeholder image representing a project" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-gray-300">
                  <h2 className="font-bold text-xl mb-2 text-white">{project.title}</h2>
                </a>
                <p className="text-gray-300 text-base mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="gradient-bg text-black rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
