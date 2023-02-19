import React from "react";

import { motion } from "framer-motion";
import { Skill } from "../../typings";
import { urlFor } from "../../lib/sanity";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

const SkillComp = ({ directionLeft, skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer sm:top-16 top-5">
      <motion.img
        initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.skillImage).url()}
        alt={skill?.title}
        className="rounded-full border border-gray-500 object-cover w-12 h-12 sm:w-16 sm:h-16 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 md:w-16 md:h-16 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl sm:text-3xl font-bold text-black opacity-100">10%</p>
        </div>
      </div>
    </div>
  );
};

export default SkillComp;
