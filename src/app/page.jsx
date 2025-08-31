"use client"
import {
  Element
} from "react-scroll";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Tech from "../components/Tech";
import Work from "../components/Work";
import Feedbacks from "../components/Feedbacks";
import Contact from "../components/Contact";
import StarsCanvas from "../components/StarsCanvas";

export default function Home() {
  return (
    <div className="relative z-0">
      <div className="bg-cover bg-no-repeat bg-center w-full h-screen bg-[url('../assets/herobg.png')]">
        <Navbar />
        <Element id="Hero"  >
          <Hero />
        </Element>
      </div>
      <Element id="About"  name="About">
        <About />
      </Element>
      <Experience />
      <Tech />
      <Element id="Work"  >
        <Work />
      </Element>
      <Feedbacks />
      <div className='relative z-0'>
        <Element id="Contact"  >
          <Contact />
        </Element>
        <StarsCanvas />
      </div>
    </div>
  );
}
