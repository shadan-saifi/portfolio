'use client'

import Image from "next/image";
import HomePage from "@/components/HomePage";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="h-screen ">
      <div id='home' className="max-h-full"><HomePage /></div>
      <div id='about' className="min-h-full ">  <About />  </div>
      <div id='skills' className="min-h-full ">  <Skills/>  </div>
      <div id='projects' className="min-h-full ">  <Projects/>  </div>
      <div id='contact' className="min-h-full ">  <Contact/>  </div>
    </main>
  );
}
