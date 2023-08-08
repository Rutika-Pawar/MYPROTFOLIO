import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - present</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2023 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2023 - present)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2023 - present)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
          <h2 className="text-4xl font-bold">Internship Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Frontend Developer Intern"
            subTitle="TechMaster Inc."
            result="DHAKA"
            des="Worked as a frontend developer intern at TechMaster Inc., contributing to building modern and responsive web interfaces using React, HTML, and CSS."
          />
          <ResumeCard
            title="Web Design Intern"
            subTitle="Creative Minds Agency"
            result="CANADA"
            des="Interned as a web design intern at Creative Minds Agency, collaborating on UI/UX designs and implementing interactive elements using JavaScript and CSS."
          />
          <ResumeCard
            title="React Native Intern"
            subTitle="Innovation Labs"
            result="NEVADA"
            des="Internship at Innovation Labs focusing on mobile app development with React Native, creating user-friendly and visually appealing interfaces."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
