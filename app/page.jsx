"use client";
import { useEffect } from "react";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Project/Projects";
import FixedMenu from "@/components/FixedMenu";
import Footer from "@/components/Footer";
import Skills from "@/components/Skill/Skills";
import Journeys from "@/components/Journey/Journeys";

const Home = () => {
  // implement locomotive scroll
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);

  return (
    <>
      <Hero />
      <FixedMenu />
      <Services />
      <About />
      <Journeys />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
