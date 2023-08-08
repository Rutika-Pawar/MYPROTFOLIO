import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - present</p>
          <h2 className="text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Project Management"
            subTitle="Product Launches"
            result="Achievements"
            des="Managed successful product launches and achieved project milestones. Led cross-functional teams to ensure project success."
          />
          <ResumeCard
            title="Customer Satisfaction"
            subTitle="Client Relations"
            result="Success Stories"
            des="Delivered exceptional customer service, resulting in high client satisfaction and positive feedback."
          />
          <ResumeCard
            title="Process Improvement"
            subTitle="Efficiency Boost"
            result="Optimization"
            des="Identified and implemented process improvements that optimized workflows and enhanced team productivity."
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - present</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Project Execution"
            subTitle="Team Collaboration"
            result="Accomplishments"
            des="Executed projects efficiently through effective teamwork and collaboration, achieving outstanding results."
          />
          <ResumeCard
            title="Problem Solving"
            subTitle="Innovative Solutions"
            result="Achievements"
            des="Solved complex problems with innovative solutions, leading to notable achievements and recognition."
          />
          <ResumeCard
            title="Professional Growth"
            subTitle="Learning Journey"
            result="Accomplishments"
            des="Continuously pursued professional growth through learning and development, resulting in significant accomplishments."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
