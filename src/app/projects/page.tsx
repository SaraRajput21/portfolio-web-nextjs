import Link from 'next/link';
import Image from 'next/image';
import Atm from '@/assets/images/atm.png';
import Calculator from '@/assets/images/calculator.png';
import NumberGuess from '@/assets/images/guessnumber.png';
import Clock from '@/assets/images/Digitalclock.png';
import Resumemaker from '@/assets/images/Resume.png';

const projects = [
  {
    title: 'Resume Builder',
    description: 'Developed a simple and stylish resume builder using HTML, CSS, and TypeScript, designed to generate modern resumes efficiently.',
    link: 'https://vercel.live/link/resume-builder01.vercel.app/?via=team-dashboard-project-entity&p=1',
    image: Resumemaker, // Directly use the image path
  },

  {
    title: 'Digital Clock',
    description: 'A simple digital clock that displays the current time.',
    link: 'https://vercel.live/link/digital-clock21.vercel.app/?via=team-dashboard-project-entity&p=1 ',
    image: Clock, // Directly use the image path
  },

  {
    title: 'CLI-based Calculator',
    description: 'A simple CLI-based calculator that performs basic arithmetic operations.',
    link: 'https://github.com/SaraRajput21/simple-calculator',
    image: Calculator, // Directly use the image path
  },
  {
    title: 'CLI-based ATM',
    description: 'An ATM simulation project showcasing banking operations.',
    link: 'https://github.com/SaraRajput21/Atm-typescript-project',
    image: Atm, // Directly use the image path
  },
  {
    title: 'CLI-based Number Guessing Game',
    description: 'A fun number guessing game where users try to guess a randomly generated number.',
    link: 'https://github.com/SaraRajput21/cli-number-guessing',
    image: NumberGuess, // Directly use the image path
  },

];

export default function Projects() {
  return (
          
    <div className="  container mx-auto py-10 px-4 text-center">
          <div className="custom-line px-40 h-0.5 m-4 md:px-6  bg-gray-300 "></div>

        <h1 className=" text-3xl md:text-4xl font-bold text-gray-200 mb-8">My Projects</h1>
      <div className=" flex flex-wrap justify-center ml-10 gap-7 md:gap-6">
        {projects.map((project, index) => (
          <Link key={index} href={project.link}>
            <div className="relative bg-gray-200 rounded-lg shadow-lg h-72 md:h-64 w-80 flex items-center justify-center transition-transform transform hover:scale-105 cursor-pointer overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill" // This makes the image fill the parent div
                className="absolute inset-0 object-cover opacity-35" // Set image as background with low opacity
              />
              <div className="relative z-10 text-black  text-center flex flex-col items-center justify-center h-full">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-950 font-medium text-lg px-2">{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

























