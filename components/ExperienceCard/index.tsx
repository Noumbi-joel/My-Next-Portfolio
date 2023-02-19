import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "../../typings";
import { urlFor } from "../../lib/sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="overflow-y-scroll scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin cursor-pointer transition-opacity duration-200 opacity-40 hover:opacity-100 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929]">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        src={urlFor(experience?.companyImage).url()}
        className="object-cover object-center w-28 h-28 rounded-full xl:w-[200px] xl:h-[200px]"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience?.company}</p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies?.map((tech) => (
            <Image
              key={tech?._id}
              className="rounded-full object-cover"
              width={40}
              height={40}
              alt="js"
              src={urlFor(tech?.skillImage).url()}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience?.dateEnded
            ? new Date(experience?.dateEnded).toDateString()
            : "Now"}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {experience?.points?.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
