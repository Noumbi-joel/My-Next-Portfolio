import React from "react";

import { motion } from "framer-motion";

// comp
import { SkillComp } from "..";
import { Skill } from "../../typings";

type Props = {
  skills: Skill[];
};

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row justify-center max-w-[2000px] xl:space-y-0 xl:px-10 min-h-screen mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="mt-28 grid grid-cols-4 gap-5">
        {skills.slice(0, 12)?.map((skill) => (
          <SkillComp key={skill._id} skill={skill} directionLeft />
        ))}
        {skills.slice(13, skills.length)?.map((skill) => (
          <SkillComp key={skill._id} skill={skill} directionLeft={false} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
