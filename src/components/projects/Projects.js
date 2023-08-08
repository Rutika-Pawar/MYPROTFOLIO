import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="PERSONAL FINANCE TRACKER (React Native)"
          des="Effortlessly manage expenses and savings with our intuitive React Native app designed for smooth financial tracking on the go."
          src={projectOne}
        />
        <ProjectsCard
          title="WEATHER APP (JavaScript)"
          des="Stay informed about real-time weather conditions through our dynamic JavaScript weather app, providing accurate forecasts and updates."


          src={projectTwo}
        />
        <ProjectsCard
          title="FOODAPP (React)"
          des="Delight in a seamless food ordering experience with our feature-rich React-powered FoodApp, offering a wide variety of culinary delights."
          src={projectThree}
        />
        <ProjectsCard
          title="FASCINATING FACTS WEBSITE (React)"
          des="Embark on a journey of knowledge with our captivating React website, where you can explore a vast collection of intriguing and mind-boggling facts."
          src={projectThree}
        />
        <ProjectsCard
          title="COMPANY WEBSITE (React)"
          des="Immerse yourself in the world of innovation and excellence with our interactive and aesthetically pleasing React-based company website showcasing our achievements and services."
          src={projectOne}
        />
        <ProjectsCard
          title="TRAVEL DIARY (React Native)"
          des="A captivating React Native app for documenting and sharing travel adventures with stunning visuals and interactive features. Explore, create, inspire!"
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects