import Image from "next/image";
import Link from "next/link";
import React from "react";

// writer
import { Cursor, useTypewriter } from "react-simple-typewriter";

// comp
import { BackgroundCircles } from "..";
import { PageInfo } from "../../typings";
import { urlFor } from "../../lib/sanity";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The Name's ${pageInfo?.name} 🖐️`,
      "Like Coffee.tsx ☕",
      "<PapaReact /> 😀",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex h-screen flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={urlFor(pageInfo?.homeImage).url()}
        alt="me"
        width={128}
        height={128}
        className="relative rounded-full mx-auto object-cover w-auto h-auto"
        priority
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>

      <div className="z-20">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
