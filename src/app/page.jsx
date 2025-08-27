"use client"
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll,
  scrollSpy,
  scroller
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
        <Hero />
      </div>
      {/* <About /> */}
      <Element id="About"  >
        <About />
      </Element>

      <Experience />
      <Tech />
      <Work />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}
