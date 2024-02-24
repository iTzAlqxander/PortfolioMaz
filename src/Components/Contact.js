import React, { useState } from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_m4ook87', 'template_z9ruaqe', e.target, 'q8-oofW_Qo54bLg0-')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message, please try again.');
      });
    setFormData({ name: '', email: '', message: '' }); // Clear form after submission
  };
  

  const downloadResume = () => {
    window.open('https://firebasestorage.googleapis.com/v0/b/mazportfolio-7ec06.appspot.com/o/MasztakResume.pdf?alt=media&token=954f7883-b605-4a7f-8070-4e66169668aa', '_blank');
};


  return (
    <div className="contact-section py-16 text-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <h2 id="Contact" className="text-2xl font-abc font-medium gradient-text mb-10">03. Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl mb-5">Let's Connect</h3>
            <p>Feel free to reach out for collaborations or just a friendly hello 👋</p>
            <div className="social-links flex space-x-4 mt-6">
              <a href="https://github.com/iTzAlqxander" target="_blank" rel="noopener noreferrer" className="hover:text-[#6fddf8] transition duration-300"><FaGithub size={28} /></a>
              <a href="https://www.linkedin.com/in/alexander-masztak/" target="_blank" rel="noopener noreferrer" className="hover:text-[#6fddf8] transition duration-300"><FaLinkedinIn size={28} /></a>
              <a href="mailto:alexander@masztak.com" className="hover:text-[#6fddf8] transition duration-300"><FaEnvelope size={28} /></a>
            </div>
            <div className="mt-6">
            <button onClick={downloadResume} className="inline-block px-6 py-3 rounded-full text-black bg-gradient-to-r from-[#6fddf8] to-[#007CF0] hover:from-[#5bc6ff] hover:to-[#4da7db] transition duration-300 shadow-lg">
    <span className="flex items-center">
        Download Resume
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    </span>
</button>

                        </div>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-[#007CF0] transition duration-300"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-[#007CF0] transition duration-300"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-[#007CF0] transition duration-300 h-40"
              required
            ></textarea>
            <button type="submit" className="px-6 py-3 rounded text-black bg-gradient-to-r from-[#6fddf8] to-[#007CF0] hover:from-[#5bc6ff] hover:to-[#4da7db] transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
