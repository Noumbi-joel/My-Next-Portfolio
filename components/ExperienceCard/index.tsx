import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="overflow-y-scroll  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin cursor-pointer transition-opacity duration-200 opacity-40 hover:opacity-100 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929]">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        src={
          "https://media.licdn.com/dms/image/C4E0BAQFW0CiIZXbp8Q/company-logo_200_200/0/1657123761743?e=1684368000&v=beta&t=um3ZpQuNCt4qcLYG7um11CyhriCfc-qXNrgM7-zwTIs"
        }
        className="object-cover object-center w-28 h-28 rounded-full xl:w-[200px] xl:h-[200px]"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of PAPAFAM</h4>
        <p className="font-bold text-2xl mt-1">PAPAFAM</p>
        <div className="flex space-x-2 my-2">
          <Image
            className="rounded-full"
            width={40}
            height={40}
            alt="js"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
          />
          <Image
            className="rounded-full"
            width={40}
            height={40}
            alt="js"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
          />
          <Image
            className="rounded-full"
            width={40}
            height={40}
            alt="js"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
