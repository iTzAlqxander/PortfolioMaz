import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import MainScreen from './Components/MainScreen';
import About from './Components/About';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Contact from './Components/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div className='ml-4 mr-4 laptop:ml-48 laptop:mr-48 phone:ml-16 phone:mr-16 tablet:ml-32 tablet:mr-32'>
      <MainScreen />
      <div className='mt-4 mb-4 phone:my-6 tablet:my-8 laptop:my-10'> {/* Adjusted margin here */}
        <About />
      </div>
      <div className='mt-4 mb-4 phone:my-6 tablet:my-8 laptop:my-10'> {/* Adjusted margin here */}
        <Projects />
      </div>
      <div className='mt-4 mb-4 phone:my-6 tablet:my-8 laptop:my-10'> {/* Adjusted margin here */}
        <Experience />
      </div>
      <div className='mt-4 mb-4 phone:my-6 tablet:my-8 laptop:my-10'> {/* Adjusted margin here */}
        <Contact />
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
