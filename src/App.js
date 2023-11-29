import './App.css';

import { useRef, useEffect, useState } from 'react';

import Profile from './components/Profile';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import References from './components/References';
import Skills from './components/Skills';
import LoadingScreen from './components/LoadingScreen';
import Card from './components/Card';

import './index.css';
import Interests from './components/Interests';
import BouncingWaveHeading from './components/BouncingWaveHeading';
import Background from './components/Background';
import { Canvas } from '@react-three/fiber';


/*
  Pages
  1. Profile (Swipe left to see more??)
  2. Education
  3. Projects
  4. Experience
  5. Contact
  6. References

  App
  --Profile
    --Location
      --Suburb/Area
    --Information About Me
      --Paragraph on who I am
    --Interests
      --Volleyball
      --Fitness/Gym
      --Game Development
      --Machine Learning
      --AI
      --Front End Development
      --Back End Development
    --Language
      --English
    --Technical Skills
      --Python
      --Java
      --JavaScript
      --C
      --C#
      --HTML
      --CSS
      --MATLAB
      --Algorithms
      --Databases
      --React
  --Education
    --Monash University - Bachelor of Electrical and Computer Systems Engineering (Honours)
    --Monash University - Bachelor of Advanced Computer Science
      --Second Class Honours Average | Distinction Average
      --WAM
      --GPA
    --Fountain Gate Secondary College - Victorian Certificate of Education
      --Year 12 Academic Excellence
  --Projects
    --Engineering FYP (Platform Development for Accessible Navigation of Urban Environments)
    --Game Development (Learning Unreal Engine C++ Coding)
  --Experience
    --No Current Professional Experience (Working on it)
    --Redi Milk (Cool Room Member)
    --Monash Peer Mentor
    --Oporto (Front of House Member)
  --Contact
    // --LinkedIn (https://www.linkedin.com/in/nathan-james-vaughan/)
    // --Phone (0401853127)
    // --Gmail (nathanjvaughan13@gmail.com)
  --References
    -- Gary Henderson (Redi Milk Ex Manager) - 0427 075 781
    -- Ken Poulter (Redi Milk Current Manager) - ###
*/


function App() {
  const containerRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
          setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!isLoading && container) {
      container.addEventListener('scroll', handleScroll);

      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }


  }, [isLoading]);

  const handleScroll = () => {
    const container = containerRef.current;
    const sections = document.querySelectorAll('.section');

    // Calculate the scroll position relative to each section
    const scrollPosition = container.scrollTop;
  
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      if (scrollPosition >= sectionTop) {
        section.classList.add('focused');
        // Add the "next" class to the next section
        if (sections[index + 1]) {
          sections[index + 1].classList.add('next');
          sections[index + 1].style.transform = `translate3d(0, ${(window.innerHeight - section.clientHeight) / 2}px, 0)`;
        }
      } else {
        section.classList.remove('focused');
        // Remove the "next" class from sections that are not the next one
        if (sections[index + 1]) {
          sections[index + 1].classList.remove('next');
        }
      }
    });
  }

  const getComponents = () => {
    return (
        <div ref={containerRef} className="container">

          <div className="section center">
            <BouncingWaveHeading />
          </div>
          <div className="section font-face-titillium-reg">
            <Card height={5} width={8}>
              <Profile />
            </Card>
          </div>
          <div className="section font-face-titillium-reg">
            <Card height={4} width={3}>
              <Interests />
            </Card>
          </div>
          <div className="section font-face-titillium-reg">
            <Card height={4} width={3}>
              <Skills />
            </Card>
          </div>
          <div className="section font-face-titillium-reg">
            <Card height={4} width={7}>
              <Education />
            </Card>
          </div>
          <div className="section font-face-titillium-reg">
            <Card height={4} width={7}>
              <Projects />
            </Card>
          </div>
          <div className="section font-face-titillium-reg">
            <Card height={6} width={7}>
              <Experience />
            </Card>
          </div>
          <div className="section font-face-titillium-reg">
            <Card height={3} width={4}>
              <Contact />
            </Card>
          </div>
          <div className="section font-face-titillium-reg">
            <Card height={3} width={3}>
              <References />
            </Card>
          </div>
        </div>
      )
  }

  return (
    <div>
      {isLoading ? <LoadingScreen /> : getComponents()}
      
    </div>
  );
}

export default App;
