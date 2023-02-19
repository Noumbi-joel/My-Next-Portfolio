import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

// comp
import {
  Header,
  Hero,
  About,
  Experiences,
  Skills,
  Projects,
  Contacts,
} from "../components";

// typings
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchExperience } from "../utils/fetchExperiences";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home({
  pageInfo,
  experiences,
  skills,
  projects,
  socials,
}: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      <Head>
        <title>NKJY - Portfolio</title>
      </Head>

      <Header socials={socials??null} resume={pageInfo.resume??null} />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo??null} />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo??null} />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experiences experiences={experiences??null} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills??null} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects??null} />
      </section>

      {/* Contact me */}
      <section id="contacts" className="snap-start">
        <Contacts />
      </section>

      {/* Sticky footer */}
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-end mr-5">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://media.licdn.com/dms/image/C5603AQG2_fptIxJ5Tg/profile-displayphoto-shrink_800_800/0/1614051280857?e=1681948800&v=beta&t=oD0KeMzJgE6slOnKA_vBI3-47nj7HKfljZC-QEzdwzQ"
              alt=""
              title="Go to the top"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const experiences: Experience[] = await fetchExperience();
  const socials: Social[] = await fetchSocials();
  const projects: Project[] = await fetchProjects();

  return {
    props: {
      pageInfo,
      skills,
      experiences,
      socials,
      projects,
    },
    revalidate: 60,
  };
};
