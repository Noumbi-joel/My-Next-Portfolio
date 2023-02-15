import React from "react";

import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center 
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        src={
          "https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-9/48415617_927193357668686_7951508151788896256_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=SmAoS_8W_0UAX8tofZC&_nc_ht=scontent-los2-1.xx&oh=00_AfCDPS-WCE86ufD8H7F2wwb6bIa_WwWUBtBsw-5Tqht1kw&oe=6412FF7E"
        }
        className="mt-28 object-cover md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[400px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here's a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          Hey, my name is Joel Yvan Noumbi and I use Little Jacob as my nickname
          because i like that GTA 4 character 😇. I've been coding for over 3
          years now. As a Full Stack developer i've worked with startups to help
          them build and scale their companies. With this passion i've now
          published some real-world web and mobile projects for production
          purpose. I'm very positively curious and like challenges that's what
          help me to overcome myself in this world.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
