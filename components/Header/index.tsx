import React from "react";

import { motion } from "framer-motion";

import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import { File, Social } from "../../typings";
import { getResumeUrl } from "../../utils/getResumeUrl";

type Props = {
  socials: Social[];
  resume: File;
};

const Header = ({ socials, resume }: Props) => {
  return (
    <header className="sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center"
      >
        {/* Social icons */}
        {socials?.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center text-gray"
      >
        <Link
          target="_blank"
          href={getResumeUrl(resume?.asset?._ref.split("-")[1])}
          className="cursor-pointer uppercase text-sm text-gray-400"
        >
          My resume 📰
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
