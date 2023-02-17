import Head from "next/head";
import Link from "next/link";

// comp
import {
  Header,
  Hero,
  About,
  Experience,
  Skills,
  Projects,
  Contacts,
} from "../components";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      <Head>
        <title>NKJY - Portfolio</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
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
