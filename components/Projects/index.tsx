import React from "react";

import { motion } from "framer-motion";
import { Project } from "../../typings";
import { urlFor } from "../../lib/sanity";
import Link from "next/link";
import Image from "next/image";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <article className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly items-center mx-auto z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="w-full sm:mt-0 mt-10 relative flex overflow-x-scroll scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin overflow-y-hidden snap-x snap-mandatory z-20">
        {projects?.sort(function (a,b) {
            return (
              new Date(b?._updatedAt).valueOf() -
              new Date(a?._updatedAt).valueOf()
            );
          })
          ?.map((project, i) => (
          <Link
            href={project?.linkToBuild}
            target="_blank"
            rel="noopener"
          >
            <motion.div
              key={project?._id}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            >
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                src={urlFor(project?.projectImage).url()}
                alt={project?.title}
                className="hidden sm:flex cursor-pointer sm:w-[100px] w-14 h-fit object-cover object-center transform transition hover:scale-150"
              />

              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-xl sm:text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Case study {i + 1} of {projects.length}:
                  </span>{" "}
                  {project?.title}
                </h4>
              </div>

              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies?.map((tech) => (
                  <Image
                    key={tech?._id}
                    src={urlFor(tech?.skillImage).url()}
                    width={20}
                    height={20}
                    alt={tech?.title}
                    className="object-cover w-auto h-auto"
                    priority
                  />
                ))}
              </div>

              <p className="sm:text-lg text-sm text-center md:text-left">
                {project?.summary}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </article>
  );
};

export default Projects;
